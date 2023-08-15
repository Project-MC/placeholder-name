import adminsModel from './admins.model.js';
export const httpGetAllAdmins = async (_req, res) => {
    return res.status(200).json(adminsModel.getAllAdmins());
};
