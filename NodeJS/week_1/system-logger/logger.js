// This module defines a Logger class that writes system logs to a file
// and emits custom events when logs are created or low memory is detected.

const fs = require("fs");
const EventEmitter = require("events");

class Logger extends EventEmitter {
  constructor(logFilePath = "log.txt") {
    super();
    this.logFilePath = logFilePath;
  }

  // Method to log a message with a timestamp
  log(message) {
    const timestamp = new Date().toLocaleTimeString("fr-FR");
    const logMessage = `[${timestamp}] ${message}\n`;

    // Append message to log file
    fs.appendFileSync(this.logFilePath, logMessage, "utf8");

    // Emit a messageLogged event
    this.emit("messageLogged", logMessage);
  }

  // Method to emit a low memory alert
  triggerLowMemoryAlert(freeMemPercent) {
    const alertMessage = `⚠️ Mémoire faible : ${freeMemPercent.toFixed(2)}% libre`;
    this.emit("lowMemory", alertMessage);
    this.log(alertMessage);
  }
}

module.exports = Logger;
