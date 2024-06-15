import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fileRead from "./libs/readfile.js";
import { log } from "node:console";
import { selectContentType } from "./libs/select-content-type.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const server = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fileRead("public/index.html",res,"text/html");
  }else if (req.method === "GET"){
    const extention = String(req.url).split(".");
    fileRead(`public${req.url}`,res,selectContentType(extention[extention.length-1]));
    log("extention => ", selectContentType(extention[extention.length-1]));
  }
};
