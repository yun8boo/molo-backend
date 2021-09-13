import { postRepository } from '../repository';

interface Params {
  postId: number;
  title?: string;
  content?: string;
  imagePath?: string;
}

export const updatePost = ({ postId, title, content, imagePath }: Params) => {
  return postRepository().updatePost({ postId, title, content, imagePath });
};
