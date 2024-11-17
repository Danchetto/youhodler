import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';
import config from './config';

const cache = new NodeCache({ stdTTL: config.UPDATE_FREQUENCY_SEC });

const getKey = (req: Request) => {
  return req.originalUrl;
};

export const checkCache = (req: Request, res: Response, next: NextFunction) => {
  const cachedData = cache.get(getKey(req));

  if (cachedData) {
    res.json(cachedData);
    return;
  }

  next();
};

export const setCache = (req: Request, data: any) => {
  cache.set(getKey(req), data);
};
