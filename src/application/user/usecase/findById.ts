import { client } from '../../../lib/prisma/client';

interface Params {
  id: number;
}

export const findById = async ({ id }: Params) => {
  try {
    const user = await client.user.findUnique({
      where: { id },
    });
    if (!user) {
      return null;
    }
    const { password, ...info } = user;
    return info;
  } catch (error) {
    throw new Error(error as string);
  }
};
