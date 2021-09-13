import { Router, Request } from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../application/post/usecase/';
import { verifyToken } from '../utils/jwt/verifyToken';

const router = Router();

router.get('/', verifyToken, async (req, res) => {
  try {
    const posts = await getPosts({ authorId: req.user.id });
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', verifyToken, async (req: Request, res) => {
  try {
    const posts = await getPost({ postId: Number(req.params.id) });
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, content, imagePath } = req.body;
    const newPost = await createPost({
      authorId: req.user.id,
      title,
      content,
      imagePath,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', verifyToken, async (req: Request, res) => {
  try {
    const { title, content, imagePath } = req.body;
    const newPost = await updatePost({
      postId: Number(req.params.id),
      title,
      content,
      imagePath,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', verifyToken, async (req: Request, res) => {
  try {
    const newPost = await deletePost({ postId: Number(req.params.id) });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
