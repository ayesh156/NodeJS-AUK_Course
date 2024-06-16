import { log } from "node:console";
import "dotenv/config";
import { createTransport } from "nodemailer";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";
import fileRead from "./old/Email Send/libs/readfile.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mailServer = createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log(
  fileRead("index.html", (data) => {
    log("Email send start");
    mailServer.sendMail(
      {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: "New Email",
        html: data,
        attachments: [
          {
            filename: "ayesh.txt",
            path: join(__dirname, "ayesh.txt"),
          },
        ],
      },
      (error, infor) => {
        if (error) {
          log("Can't not send the email");
        } else {
          log("Email sent");
        }
      }
    );
    log("Email send end");
  })
);
