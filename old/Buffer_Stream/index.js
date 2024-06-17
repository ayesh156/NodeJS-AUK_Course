import { log } from "node:console";
import { createServer } from "node:http";
import { createReadStream, createWriteStream, readFile } from "node:fs";

const readStream = createReadStream("./HITSOFJUNE2021.mp4");

const server = createServer((req, res) => {
  res.writeHead(200, "Content-type: video/mp4");

  readStream.pipe(res);
});

server.listen(3000, () => log("server running..."));
