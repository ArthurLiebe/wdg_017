import {access, appendFile, mkdir, unlink} from 'fs/promises';
import path from 'path';

// node app.mjs create "hello world"
// node app.mjs delete "./2024..../17.txt"

const command = process.argv[2];
const argument = process.argv[3];

async function createDirIfNotExists(dirPath) {
    try {
        await access(dirPath);
        return `Directory ${dirPath} already exists`;
    } catch (error) {
        await mkdir(dirPath, {recursive: true});
        return `Directory ${dirPath} created successfully`;
    }
}

async function createFileWithMessage(message) {
    try {
        const now = new Date();
        const dirName = `${now.getFullYear()}-${(now.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        console.log(dirName);

        const fileName = `${now.getHours().toString().padStart(2, '0')}-${now
            .getMinutes()
            .toString()
            .padStart(2, '0')}.txt`;

        await createDirIfNotExists(dirName);

        const filePath = path.join(dirName, fileName);

        await appendFile(filePath, message + ' \n');
    } catch (error) {
        console.error(error);
    }
}

async function deleteFileByName(filePath) {
    try {
        await access(filePath);
        await unlink(filePath);
    } catch (error) {
        console.log('File not found');
    }
}

if (command === 'create' && argument) {
    createFileWithMessage(argument);
} else if (command === 'delete' && argument) {
    deleteFileByName(argument);
} else {
    console.log(
        `Invalid command or missing argument. Use "create <message>" or "delete <fileName>".`
    );
}
