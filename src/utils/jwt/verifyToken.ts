import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config';

export const verifyToken = (
  req: Request<{ user: any }>,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.token;
  if (authHeader && typeof authHeader === 'string') {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.secret_key as string, (err, user) => {
      if (err) {
        res.status(403).json('Token is not valid');
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(403).json('You are not authenticated!');
  }
};
