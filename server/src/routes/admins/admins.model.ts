import { User } from '../users/users.model.js';

// Admin Class that is just an extension of the User class
class Admin extends User {
  constructor(firstName: string, email: string, password: string) {
    super(firstName, email, password);
  }
}

// In-Memory Admins For PostMan/GraphiQL Tests  (Removed when database is set up)
const admins: Admin[] = [
  new Admin('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
  new Admin('Matt', 'msf930@gmail.com', 'test456')
];

// 'Admins Model' that will contain all product related methods, CRUD operations
const AdminsModel = {
  getAllAdmins: () => admins
};

export default AdminsModel;
