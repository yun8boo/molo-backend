import crypto from 'crypto-js';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import { client } from '../../../lib/prisma/client';

interface Params {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Params) => {
  try {
    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }

    const bytes = crypto.AES.decrypt(
      user.password,
      config.secret_key as string
    );
    const originalText = bytes.toString(crypto.enc.Utf8);

    if (password !== originalText) {
      return null;
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      config.secret_key as string,
      { expiresIn: '5d' }
    );

    const { password: _, ...info } = user;
    return { ...info, accessToken };
  } catch (error) {
    throw new Error(error as string);
  }
};
