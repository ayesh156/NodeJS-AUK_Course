import fileRead from "./libs/readfile.js";
import {log} from "node:console";
import fileWrite from "./libs/writefile.js";

fileRead("read.txt", (data) => {
    const whatToDo = String(data).split(" ");
    const command = whatToDo[0];
    const content = whatToDo.slice(1, whatToDo.length - 1).join(" ");
    const file = whatToDo[whatToDo.length - 1];

    if (command === "write"){
        fileWrite(file, content, (d) => log(d));
    }
});