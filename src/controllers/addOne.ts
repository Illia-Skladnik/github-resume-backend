import { Request, Response } from 'express';
import { addOneUser } from '../services/addOneUser';

export const addOneController = async(req: Request, res: Response) => {
  // const { login, created_at, html_url, public_repos, repos_url, updated_at } = req.body;
  const response = await addOneUser(req.body);

  res.send(response);
};