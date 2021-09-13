import { postRepository } from '../repository';

interface Params {
  postId: number;
}

export const getPost = ({ postId }: Params) => {
  return postRepository().getPost({ postId });
};
