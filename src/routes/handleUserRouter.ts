import * as express from 'express';
import { handleUserController } from "../controllers/handleUser";

export const handleUserRouter = express.Router();
handleUserRouter.get('/:login', handleUserController);

