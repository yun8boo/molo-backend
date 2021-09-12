import { client } from "../../../lib/prisma/client"

interface Params {
  title: string
  content: string
  imagePath?: string
}

export const createPost = async ({title, content, imagePath}: Params) =>  {
  try {

  } catch (error) {
    throw error
  }
}