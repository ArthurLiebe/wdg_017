import './db/index.js';
import express from 'express';
import cors from 'cors';
import postsRouter from './routes/postsRouter.js';
import authRouter from './routes/authRouter.js';
import errorHandler from './middlewares/errorHandler.js';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({origin: process.env.SPA_ORIGIN, credentials: true}));
app.use(morgan('dev'));
app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('*', (req, res) => res.status(404).json({error: 'Not found'}));
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port : ${port}`));
