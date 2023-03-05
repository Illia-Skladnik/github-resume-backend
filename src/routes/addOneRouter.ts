import * as express from 'express';
import { addOneController } from "../controllers/addOne";

export const addOneRouter = express.Router();
addOneRouter.get('/', addOneController);

