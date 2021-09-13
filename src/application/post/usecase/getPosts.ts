import { postRepository } from "../repository"

interface Params {
  authorId: number
}

export const getPosts = ({authorId}: Params) =>  {
  return postRepository().getPosts({authorId})
}