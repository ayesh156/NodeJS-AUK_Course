import { log } from "node:console";
import { createServer } from "node:http";
import { copyFile, rm, mkdir, existsSync } from "node:fs";
import { server } from "./server-control.js";


const PORT = process.env.PORT || 4000;

createServer((req, res) => {
    server(req, res);
    res.write
}).listen(PORT, () => log(`server running ${PORT}`));