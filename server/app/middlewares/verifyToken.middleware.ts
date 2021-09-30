import { Request, Response, NextFunction } from 'express';
import * as JWT from 'jsonwebtoken';
import config from '../../config/auth.config';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;

  if (!token) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  JWT.verify(token, config.secret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized: not authenticated.' });
    }
    req.userId = decoded.id;
    return next();
  });
};

export default verifyToken;