import express from 'express';

const api = express.Router();

import adminsRouter from './admins/admins.router.js';
api.use('/admins', adminsRouter);

import usersRouter from './users/users.router.js';
api.use('/users', usersRouter);

export default api;
