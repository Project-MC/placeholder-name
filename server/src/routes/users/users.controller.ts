import { Request, Response } from 'express';
import usersModel from './users.model.js';

// Express Function for http requests to: GET '/v1/users'
export const httpGetAllUsers = async (_req: Request, res: Response) => {
  return res.status(200).json(usersModel.getAllUsers());
};
