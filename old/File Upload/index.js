import { log } from "node:console";
import { createServer } from "node:http";
import {IncomingForm} from 'formidable';
import { getDataHtml, postDataHtml } from "./user-data-handle.js";
import { copyFile, rm, mkdir, existsSync } from "node:fs";

createServer((req, res) => {
    if(req.method === 'POST'){
        const userData = new IncomingForm();
        userData.parse(req, (err, fields, files) => {
            if(err){
                res.end(postDataHtml('err'));
            }else {
                log("user data fields",fields);
                log("user data files",files.userfiles[0].originalFilename);
                res.end(postDataHtml('ok'));


                const fileSrcPath = files.userfiles[0].filepath;
                const fileDestPath = `upload/${files.userfiles[0].originalFilename}`;

                if(!existsSync('upload')){
                    mkdir('upload',(err)=>{
                        if(err){
                            log("Can't make folder");
                        }
                    })
                }

                copyFile(fileSrcPath,fileDestPath,(err)=>log("err"));
                rm(fileSrcPath,(err)=>{
                    if(err){
                        log(err);
                    }else{
                        log("File deleted");
                    }
                })
            }
        })
    }else if (req.method === 'GET'){
        res.end(getDataHtml());
    }
}).listen(4000, () => log("server running"));