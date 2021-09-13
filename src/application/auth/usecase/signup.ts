import crypto from 'crypto-js';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import { client } from '../../../lib/prisma/client';

interface Params {
  email: string;
  password: string;
}

export const signup = async ({ email, password }: Params) => {
  try {
    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return null;
    }
    const initialName = email.substring(0, email.indexOf('@'));
    const newUser = await client.user.create({
      data: {
        email,
        name: initialName,
        password: crypto.AES.encrypt(
          password,
          config.secret_key as string
        ).toString(),
      },
    });

    const accessToken = jwt.sign(
      { id: newUser.id, email: newUser.email },
      config.secret_key as string,
      { expiresIn: '5d' }
    );

    const { password: _, ...info } = newUser;
    return { ...info, accessToken };
  } catch (error) {
    throw new Error(error as string);
  }
};
