import express from 'express';
import './db/index.js';

const app = express();

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
} from './controllers/users.js';

import {
    getNotes,
    getNoteById,
    createNote,
    deleteNote,
    updateNote,
} from './controllers/notes.js';

const port = process.env.PORT || 8080;

app.use(express.json());

app.route('/notes').get(getNotes).post(createNote);
app.route('/notes/:id').get(getNoteById).put(updateNote).delete(deleteNote);

app.route('/users').get(getUsers).post(createUser);
app.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

app.listen(port, () => console.log(`Server is running on port ${port}`));
