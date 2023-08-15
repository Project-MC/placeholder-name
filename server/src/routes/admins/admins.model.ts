import { User } from '../users/users.model.js';

class Admin extends User {
  constructor(firstName: string, email: string, password: string) {
    super(firstName, email, password);
  }
}

const admins: Admin[] = [
  new Admin('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
  new Admin('Matt', 'msf930@gmail.com', 'test456')
];

const adminsModel = {
  getAllAdmins: () => admins
};

export default adminsModel;
