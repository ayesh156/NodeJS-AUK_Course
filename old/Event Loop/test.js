import {readFile} from 'node:fs'

console.log("amila 1");

console.log("amila 2");

setTimeout(() => {
    console.log("timeout 1");
}, 0);

setImmediate(()=>console.log("immediate"));

readFile('./ayesh.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

console.log("amila 3");
const a = new Promise((resolve,reject)=>{
    resolve('Hi')
})
a.then(data=>console.log(data));

console.log("amila 4");

setTimeout(() => {
    console.log("timeout 2");
}, 0);

console.log("amila 5");