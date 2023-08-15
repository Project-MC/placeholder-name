// User class for quickly creating users
export class User {
  firstName: string;
  email: string;
  password: string;
  token: string;
  createdAt: string;
  updatedAt: string;

  constructor(firstName: string, email: string, password: string) {
    const date = new Date().toUTCString();

    this.firstName = firstName;
    this.email = email;
    this.password = password;
    this.token = '';
    this.createdAt = date;
    this.updatedAt = date;
  }
}

// In-Memory Users For PostMan/GraphiQL Tests  (Removed when database is set up)
const users: User[] = [
  new User('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
  new User('Matt', 'msf930@gmail.com', 'test456')
];

// 'Users Model' that will contain all product related methods, CRUD operations
const UsersModel = {
  getAllUsers: () => users
};

export default UsersModel;
