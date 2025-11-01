// import events and put it in EventEmitter object
const EventEmitter = require("events");

// create a class logger extends EventEmitter object 
class Logger extends EventEmitter {
    log(message) { // log function that log message and use method emit with messgae and object
        console.log("LOG :", message);
        this.emit("messageLogger", {message, date: new Date() })
    }
}

module.exports = Logger;