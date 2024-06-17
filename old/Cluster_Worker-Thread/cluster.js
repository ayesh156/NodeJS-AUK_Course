import { log } from "node:console";
import { createServer } from "node:http";
import { dirname,join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";
import { cpus } from "node:os";
import Cluster from "node:cluster";
import process from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log(__dirname);
log(__filename);

const port = process.env.PORT || 3000;

// log(cpus());
// log(cpus().length);

if(Cluster.isPrimary){
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < cpus().length - 3; i++) {
    Cluster.fork();
  }

  Cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else{
  const server = createServer((req, res) => {
    if(req.url === "/"){
      res.writeHead(200, "Content-type: text/plain");
      res.end("Hiii");
    }else if(req.url === "/data") {
      res.writeHead(200, "Content-type: text/plain");
      const data = readFileSync(join(__dirname, "text.txt"));
      res.end(data);
    }
    
  });
  
  server.listen(port, () => {
    console.log(`Worker ${process.pid} started`);
    log(`server running port ${port}...`)});
}


