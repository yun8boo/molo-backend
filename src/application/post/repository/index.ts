import { client } from '../../../lib/prisma/client';

interface GetPosts {
  authorId: number;
}

interface GetPost {
  postId: number;
}

interface CreatePost {
  authorId: number;
  title: string;
  content: string;
  imagePath?: string;
}

interface UpdatePost {
  postId: number;
  title?: string;
  content?: string;
  imagePath?: string;
}

interface DeletePost {
  postId: number;
}

export const postRepository = () => {
  const getPosts = ({ authorId }: GetPosts) =>
    client.post.findMany({ where: { authorId } });
  const getPost = ({ postId }: GetPost) =>
    client.post.findUnique({ where: { id: postId } });
  const createPost = ({ title, content, imagePath, authorId }: CreatePost) =>
    client.post.create({ data: { title, content, imagePath, authorId } });
  const updatePost = ({ title, content, imagePath, postId }: UpdatePost) =>
    client.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        content,
        imagePath,
      },
    });
  const deletePost = ({ postId }: DeletePost) =>
    client.post.delete({ where: { id: postId } });
  return {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
  };
};
