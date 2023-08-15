import express from 'express';
import { httpGetAllUsers } from './users.controller.js';
const usersRouter = express.Router();
usersRouter.get('/', httpGetAllUsers);
export default usersRouter;
