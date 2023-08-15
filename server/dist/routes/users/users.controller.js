import usersModel from './users.model.js';
export const httpGetAllUsers = async (_req, res) => {
    return res.status(200).json(usersModel.getAllUsers());
};
