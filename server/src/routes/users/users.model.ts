import { User } from '../@types/users';

const users: User[] = [
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

const usersModel = {
  getAllUsers: () => users
};

export default usersModel;
