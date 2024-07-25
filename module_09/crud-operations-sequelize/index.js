import express from 'express';
import './db/index.js';

const app = express();

import userRoutes from './router/users.js';
import notesRoutes from './router/notes.js';

const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/notes', notesRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
