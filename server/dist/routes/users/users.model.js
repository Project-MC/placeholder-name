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
const users = [
    new User('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
    new User('Matt', 'msf930@gmail.com', 'test456')
];
const usersModel = {
    getAllUsers: () => users
};
export default usersModel;
