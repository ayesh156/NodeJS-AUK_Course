import { log } from "node:console";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = async (path,res,contentType) => {
    try {
        const data = await readFile(join(__dirname,"../", path));
        res.writeHead(200, `Content-Type: ${contentType}`);
        res.end(data);
    } catch (error) {
        res.writeHead(404,  `Content-Type: ${contentType}`);
        const data = await readFile(join(__dirname,"../public/404.html"));
        res.end(data);
    }
    
}

export default fileRead;