// This script monitors system resources every 5 seconds
// and logs the data using our Logger class.

const os = require("os");
const Logger = require("./logger");

// Create a new logger instance
const logger = new Logger();

// Event listener: log message written
logger.on("messageLogged", (msg) => {
  console.log("Log saved:", msg.trim());
});

// Event listener: low memory alert
logger.on("lowMemory", (msg) => {
  console.log(msg);
});

// Function to collect system data
function collectSystemStats() {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();
  const uptime = os.uptime();
  const freeMemPercent = (freeMem / totalMem) * 100;

  // Format system info
  const stats = `
Mémoire libre: ${(freeMem / 1024 / 1024).toFixed(2)} MB
Mémoire totale: ${(totalMem / 1024 / 1024).toFixed(2)} MB
Uptime: ${(uptime / 60).toFixed(2)} minutes
Pourcentage mémoire libre: ${freeMemPercent.toFixed(2)}%
  `.trim();

  // Log stats
  logger.log(stats);

  // Check for low memory condition
  if (freeMemPercent < 20) {
    logger.triggerLowMemoryAlert(freeMemPercent);
  }
}

// Run every 5 seconds
setInterval(collectSystemStats, 5000);

// Run immediately once at startup
collectSystemStats();
