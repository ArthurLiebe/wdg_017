import http, {createServer} from 'http';
import {createFileWithMessage, deleteFileByName} from './fileUtils.js';

const PORT = process.env.PORT || 3000;

async function requestHandler(req, res) {
    const singlePostRegex = /^\/files\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\.txt$/;
    const {method, url} = req;
    console.log(method, url);

    if (url === '/files') {
        if (method === 'POST') {
            console.log('testing');
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                let parsedBody;
                try {
                    parsedBody = JSON.parse(body);
                } catch (error) {
                    console.log(error);
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({message: 'Invalid body'}));
                }
                if (!parsedBody || !parsedBody.message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(
                        JSON.stringify({message: 'Body is required'})
                    );
                }

                await createFileWithMessage(parsedBody.message);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                return res.end(
                    JSON.stringify({message: 'File created successfully'})
                );
            });
        } else {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({message: 'Unsupported method'}));
        }
    } else if (singlePostRegex.test(url)) {
        if (method === 'DELETE') {
            const filePath = url.split('/').slice(2).join('/');
            await deleteFileByName(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(
                JSON.stringify({message: 'File deleted successfully'})
            );
        } else {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({message: 'Unsupported method'}));
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({message: 'Not found'}));
    }
}

const server = createServer(requestHandler);

server.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
