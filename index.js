import { log } from "node:console";
import { EventEmitter } from "node:events";

class AUKEmitter extends EventEmitter {
  constructor(city, age){
    super();
    this.city = city;
    this.age = age;
  }

  runOnClick() {
    this.emit("onClick", 12, this.city);
  }
}

const emitterObj = new AUKEmitter("Matara", 23);

emitterObj.on("onClick", (name, city) => {
  log("onClick event", `Your name is : ${name} ${city}`);
});


const myFunction = async (name) => {
  log("onClick event", name);
}
  
emitterObj.addListener("onClick2", myFunction);

emitterObj.emit("onClick2", "amila");
emitterObj.emit("onClick2", "upul");
emitterObj.removeListener("onClick2", myFunction);
emitterObj.emit("onClick2");
emitterObj.emit("onClick2");

emitterObj.runOnClick();

// emitterObj.emit("onClick", 12, {name:"kamal"});
// emitterObj.emit("onClick", 12, {name:"kamal"});