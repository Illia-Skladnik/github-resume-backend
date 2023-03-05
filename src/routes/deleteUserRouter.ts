import * as express from 'express';
import { deleteUserController } from "../controllers/deleteUser";

export const deleteUserRouter = express.Router();
deleteUserRouter.get('/:login', deleteUserController);

