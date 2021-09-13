import { Router } from 'express';
import { signup } from '../application/auth/usecase/signup';
import { login } from '../application/auth/usecase/login';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ data: 'hello' });
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await signup({
      email: req.body.email,
      password: req.body.password,
    });
    if (!newUser) {
      res.status(400).json('Already registered email.');
    }
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await login({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      res.status(400).json('Failed');
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
