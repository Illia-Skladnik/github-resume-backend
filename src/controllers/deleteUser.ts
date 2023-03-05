import { Request, Response } from 'express';
import { deleteUser } from '../services/deleteUser';

export const deleteUserController = (req: Request, res: Response) => {
  const { login } = req.params;
  deleteUser(login);

  res.sendStatus(200);
};