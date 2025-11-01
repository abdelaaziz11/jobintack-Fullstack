// Simple HTTP server that serves log contents and system stats.

const http = require("http");
const fs = require("fs");
const os = require("os");

const PORT = 3000;
const LOG_FILE = "log.txt";

// Function to get current system stats
function getCurrentStats() {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();
  const uptime = os.uptime();
  const freeMemPercent = (freeMem / totalMem) * 100;

  return {
    freeMemoryMB: (freeMem / 1024 / 1024).toFixed(2),
    totalMemoryMB: (totalMem / 1024 / 1024).toFixed(2),
    uptimeMinutes: (uptime / 60).toFixed(2),
    freeMemoryPercent: freeMemPercent.toFixed(2),
  };
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Home route
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bienvenue sur le Node System Logger 🖥️");
  } else if (req.url === "/logs") {
    // Serve log file content
    fs.readFile(LOG_FILE, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("Erreur lors de la lecture du fichier log.");
      }
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(data);
    });
  } else if (req.url === "/stats") {
    // Serve system stats as JSON
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(getCurrentStats(), null, 2));
  } else {
    // 404
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Page non trouvée.");
  }
});

server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
