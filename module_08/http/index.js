import http from 'http';
import crypto from 'crypto';
const posts = [
    {
        id: '1',
        title: 'First post',
        content: 'Hello world!',
    },
    {
        id: '2',
        title: 'Second post',
        content: 'My second post!',
    },
];

const requestHandler = (req, res) => {
    const singlePostRegex = /^\/posts\/[0-9a-zA-Z]+$/;
    const {method, url} = req;
    console.log({url});
    console.log({method});


    if (url === '/posts') {
        if (method === 'GET') {
            // res.statusCode = 200;
            // res.setHeader('Content-Type', 'application/json');
            // return res.end(JSON.stringify(posts));
            res.statusCode = 418;
            res.end('Hello World');
        }
        if (method === 'POST') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                const newPost = {id: crypto.randomUUID(), ...JSON.parse(body)};
                posts.push(newPost);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify(newPost));
            });
        }
    }

    if (singlePostRegex.test(url)) {
        if (method === 'GET') {
            return console.log(`Get request on ${url}`);
        }
        if (method === 'PUT') {
            return console.log(`PUT request on ${url}`);
        }

        if (method === 'DELETE') {
            return console.log(`DELETE request on ${url}`);
        }
        return console.log('Invalid method');
    }
    return console.log('Invalid request');
};

const server = http.createServer(requestHandler);

const port = process.env.PORT || 3000;

server.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`)
);
