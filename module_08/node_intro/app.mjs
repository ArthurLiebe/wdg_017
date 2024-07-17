import {writeFileSync} from 'fs';
// import {writeFile} from 'fs';
import {writeFile} from 'fs/promises';
import {readFile} from 'fs/promises';
import {freemem} from 'os';
import http from 'http';

// try {
//     writeFileSync('shrek.txt', 'Shrek is love, Shrek is life');
// } catch (error) {
//     console.error('there was an errror: ', error);
// }

// console.log('hello world');

// writeFile('shrek2.txt', 'Shrek is love, Shrek is life', (err) => {
//     if (err) {
//         console.error('there was an error: ', err);
//     } else {
//         console.log('successfully created shrek text');
//     }
// });

// try {
//     await writeFile('shrek3.txt', 'shrek is love, shrek is life');
//     console.log('successfully created shrek text');
// } catch (error) {
//     console.error('there was an error: ', error.message);
// }

// try {
//     const fileContent = await readFile('shrek.txt', 'utf-8');
//     console.log(fileContent);
// } catch (error) {
//     console.error('there was an error: ', error.message);
// }

// console.log(freemem());

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Document</title>
    </head>
    <body>
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center">Here's a dog!</h1>
        <p class="text-center">This code came from a Node-powered server!</p>
        <img src="https://placedog.net/500/280" alt="Dog" class="mx-auto mt-4">
      </div>
    </body>
    </html>
        `);
});

const port = 3000;

server.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});
