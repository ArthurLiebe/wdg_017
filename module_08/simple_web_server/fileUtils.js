import {access, appendFile, mkdir, unlink} from 'fs/promises';
import path from 'path';

async function createDirIfNotExists(dirPath) {
    try {
        await access(dirPath);
        return `Directory ${dirPath} already exists.`;
    } catch (error) {
        await mkdir(dirPath, {recursive: true});
        return `Directory ${dirPath} created successfully.`;
    }
}

export async function createFileWithMessage(message) {
    try {
        const now = new Date();
        const dirName = `${now.getFullYear()}-${(now.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        console.log('dirName', dirName);

        const fileName = `${now.getHours().toString().padStart(2, '0')}-${now
            .getMinutes()
            .toString()}.txt`;
        console.log(fileName);

        await createDirIfNotExists(dirName);

        const filePath = path.join(dirName, fileName);
        console.log(filePath);

        await appendFile(filePath, message + '\n');
    } catch (error) {
        console.log(error);
    }
}

export async function deleteFileByName(filePath) {
    try {
        await access(filePath);
        await unlink(filePath);
        console.log('File deleted successfully!');
    } catch (error) {
        console.log('File not found');
    }
}
