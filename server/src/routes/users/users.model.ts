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

const users: User[] = [
  new User('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
  new User('Matt', 'msf930@gmail.com', 'test456')
];

const usersModel = {
  getAllUsers: () => users
};

export default usersModel;
