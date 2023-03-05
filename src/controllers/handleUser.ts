import { Request, Response } from 'express';
import { handleUser } from '../services/handleUser';

export const handleUserController = async(req: Request, res: Response) => {
  const response = await handleUser(req.params);

  res.send(response);
};