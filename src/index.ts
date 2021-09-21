import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth';
import currentUserRouter from './routers/currentUser';
import postsRouter from './routers/posts';
import config from './config';

const app = express();

// jwtをいずれcookieで管理
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/current_user', currentUserRouter);
app.use('/api/posts', postsRouter);

app.listen(config.port, () => {
  console.log('server is running', config.port);
});
