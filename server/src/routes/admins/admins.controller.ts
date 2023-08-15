import { Request, Response } from 'express';
import adminsModel from './admins.model.js';

// Express Function for http requests to: GET '/v1/admins'
export const httpGetAllAdmins = async (_req: Request, res: Response) => {
  return res.status(200).json(adminsModel.getAllAdmins());
};
