import { Request, Response } from 'express';
import adminsModel from './admins.model.js';

export const httpGetAllAdmins = async (_req: Request, res: Response) => {
  return res.status(200).json(adminsModel.getAllAdmins());
};
