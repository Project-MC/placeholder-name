import express from 'express';
import { httpGetAllUsers } from './users.controller.js';
// User Routes for API Router
const usersRouter = express.Router();
usersRouter.get('/', httpGetAllUsers);
export default usersRouter;
