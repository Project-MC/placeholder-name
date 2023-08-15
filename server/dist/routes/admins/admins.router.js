import express from 'express';
import { httpGetAllAdmins } from './admins.controller.js';
// Admin Routes for API Router
const adminsRouter = express.Router();
adminsRouter.get('/', httpGetAllAdmins);
export default adminsRouter;
