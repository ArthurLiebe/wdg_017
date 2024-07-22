// import http from 'http';
import express, {urlencoded} from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// const server = http.createServer(requestHandler);

// function requestHandler(req, res) {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hello World!');
//     } else {
//         res.writeHead(405, {'Content-Type': 'text/plain'});
//         res.end('Not Allowed');
//     }
// }

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
];

// app.get('/', (req, res) => res.send('Hello World'));

app.get('/posts', (req, res) => res.json(posts));

app.post('/posts', (req, res) => {
    res.status(201).json({message: 'New Post created'});
});

app.get('/posts/:id', (req, res) => {
    console.log(req.params);
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({message: 'Post not found'});
    return res.json(post);
});

app.put('/posts/:id', (req, res) => res.json({message: 'Put a post by id'}));

app.delete('/posts/:id', (req, res) => {
    res.json({message: 'Delete a post by id'});
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
