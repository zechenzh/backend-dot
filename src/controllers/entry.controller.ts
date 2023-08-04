import { Request, Response } from 'express';

export function entry(req: Request, res: Response): Response {
  return res.json('Welcome to my User Collection');
};