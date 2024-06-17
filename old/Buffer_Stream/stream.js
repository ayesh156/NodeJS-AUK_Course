import { log } from "node:console";
import { createReadStream, createWriteStream, readFile } from "node:fs";
import { Transform } from "node:stream";

const editString = new Transform({
    transform(chunk,encoding,callback) {
        log(chunk.toString());
        callback(null, chunk.toString().toUpperCase())
    }
})

const readStream = createReadStream("./text.txt", {highWaterMark: 24});
const writeStream = createWriteStream("./chathura.txt")

readStream.pipe(editString).pipe(writeStream);