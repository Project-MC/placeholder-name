import { Admin } from "../@types/admins";

const admins: Admin[] = [
  {
    firstName: 'C.J.',
    email: 'dev.cjfritz@gmail.com',
    password: 'test123',
    token: '',
    createdAt: new Date().toUTCString(),
    updatedAt: new Date().toUTCString()
  },
  {
    firstName: 'Matt',
    email: 'dev.matt@gmail.com',
    password: 'test123',
    token: '',
    createdAt: new Date().toUTCString(),
    updatedAt: new Date().toUTCString()
  }
];

const adminsModel = {
  getAllAdmins: () => admins
};

export default adminsModel;
