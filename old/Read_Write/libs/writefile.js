import { log } from "node:console";
import { writeFile } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWrite = (path, data, yourFun = (d) => {}) => {
  writeFile(join(__dirname, `../${path}`), data, { encoding: "utf-8" }, (err) => {
    if (!err) {
      yourFun("Your file is created");
    }
  });
};

export default fileWrite;