// User class for quickly creating users
export class User {
    constructor(firstName, email, password) {
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
const users = [
    new User('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
    new User('Matt', 'msf930@gmail.com', 'test456')
];
// 'Users Model' that will contain all product related methods, CRUD operations
const UsersModel = {
    getAllUsers: () => users
};
export default UsersModel;
