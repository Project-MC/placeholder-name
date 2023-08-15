import { User } from '../users/users.model.js';
class Admin extends User {
    constructor(firstName, email, password) {
        super(firstName, email, password);
    }
}
const admins = [
    new Admin('C.J.', 'dev.cjfritz@gmail.com', 'test123'),
    new Admin('Matt', 'msf930@gmail.com', 'test456')
];
const adminsModel = {
    getAllAdmins: () => admins
};
export default adminsModel;
