import { postRepository } from '../repository';

interface Params {
  postId: number;
}

export const deletePost = ({ postId }: Params) => {
  return postRepository().deletePost({ postId });
};
