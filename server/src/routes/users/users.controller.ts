import { Request, Response } from 'express';
import usersModel from './users.model.js';

export const httpGetAllUsers = async (_req: Request, res: Response) => {
  return res.status(200).json(usersModel.getAllUsers());
};
