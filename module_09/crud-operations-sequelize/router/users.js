import {Router} from 'express';

import {
    getUserById,
    getUsers,
    updateUser,
    createUser,
    deleteUser,
} from '../controllers/users.js';

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUserById);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
