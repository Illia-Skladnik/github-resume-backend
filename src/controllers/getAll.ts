import { Request, Response } from 'express';
import { getAllUsers } from '../services/getAllUsers';

export const getAllController = async(req: Request, res: Response) => {
  res.status(200)
  res.send(await getAllUsers());
};