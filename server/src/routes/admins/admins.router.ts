import express from 'express';
import { httpGetAllAdmins } from './admins.controller.js';

const adminsRouter = express.Router();

adminsRouter.get('/', httpGetAllAdmins);

export default adminsRouter;
