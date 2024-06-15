import fileRead from "./libs/readfile.js";
import { log } from "node:console";
import fileWrite from "./libs/writefile.js";
import inquirer from "inquirer";
import { cardGen } from "./libs/htmlCardGen.js";

const studentInfor = [];

(async () => {

  let allCard = '';

  do {
    const data = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Student name",
      },
      {
        type: "number",
        name: "age",
        message: "Enter Student age",
      },
      {
        type: "input",
        name: "city",
        message: "Enter Student city",
      },
      {
        type: "list",
        name: "stuClass",
        message: "Enter Student class",
        choices: ["class 1","class 2","class 3","class 4"],
      },
      {
        type: "checkbox",
        name: "subject",
        message: "Enter Student subject",
        choices: ["java","javascript","python","golang","dart"],
      },
      {
        type: "confirm",
        name: "check",
        message: "Have other values",
      },
    ]);

    // log(data);
    const {check, ...infor} = data;
    studentInfor.push(infor);
    if (!check) {
      break;
    }
  } while (true);

  studentInfor.forEach(({name,age,city,stuClass,subject})=>{
    allCard += cardGen(name,age,city,stuClass,subject)
  })

  log(allCard);

  let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Infor</title>
    <link rel="stylesheet" href="./index.css" />
</head>
<body>
    <main>
        ${allCard}
    </main>
</body>
</html>`;

fileWrite('index.html',htmlContent,(d) => log(d))

})();

// fileRead("read.txt", (data) => {
//     const whatToDo = String(data).split(" ");
//     const command = whatToDo[0];
//     const content = whatToDo.slice(1, whatToDo.length - 1).join(" ");
//     const file = whatToDo[whatToDo.length - 1];

//     if (command === "write"){
//         fileWrite(file, content, (d) => log(d));
//     }
// });
