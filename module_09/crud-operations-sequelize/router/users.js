import {Router} from 'express';

import {
    getUserById,
    getUsers,
    updateUser,
    createUser,
    deleteUser,
} from '../controllers/users.js';
import {checkIfUserExists} from '../middleware/checkUser.js';
import {logger} from '../middleware/logger.js';

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:id', checkIfUserExists, logger, getUserById);
userRoutes.put('/:id', checkIfUserExists, updateUser);
userRoutes.delete('/:id', checkIfUserExists, deleteUser);

export default userRoutes;
