import { postRepository } from "../repository"

interface Params {
  authorId: number
  title: string
  content: string
  imagePath?: string
}

export const createPost = ({authorId, title, content, imagePath}: Params) =>  {
  return postRepository().createPost({authorId, title, content, imagePath})
}