import {Router} from 'express';
import {
    createNote,
    deleteNote,
    getNoteById,
    getNotes,
    updateNote,
} from '../controllers/notes.js';

const notesRoutes = Router();

notesRoutes.get('/', getNotes);
notesRoutes.post('/', createNote);

notesRoutes.get('/:id', getNoteById);
notesRoutes.put('/:id', updateNote);
notesRoutes.delete('/:id', deleteNote);

export default notesRoutes;
