const { setTimeout } = require("timers/promises");
const logEvent = require("./logEvent"); // is costume module

const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

// initializing object
const myEmitter = new MyEmitter();

// add listener

myEmitter.on("log", (msg) => {
  logEvent(msg);
});

myEmitter.emit("log", "hello im the parameter and the event emitted\n");
