import express from 'express';
import authRouter from './routers/auth';
import currentUserRouter from './routers/currentUser';
import postsRouter from './routers/posts';
import config from './config';

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/current_user', currentUserRouter);
app.use('/api/posts', postsRouter);

app.listen(config.port, () => {
  console.log('server is running', config.port);
});
