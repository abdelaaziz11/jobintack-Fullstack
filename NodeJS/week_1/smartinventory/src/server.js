// server.js - Server principal (noyau dial application)
// Hada file li ki start kolchi

// ========== IMPORTS ==========

// http - Module built-in f Node.js bach n5el9o HTTP server
const http = require('http');

// router - Function li dirina (li kat route requests)
const router = require('./router');

// logger - Logger dial events
const logger = require('./utils/logger');

// ========== CONFIGURATION ==========

// Simulation dial dotenv (f production, ista3mel dotenv package)
// dotenv ki9ra .env file o ي7ot variables f process.env
require('dotenv').config = () => {}; // Blank function (placeholder)

// PORT - Port li server ghadi يستمع عليه
// process.env.PORT - Variable d'environnement (mn .env file)
// || 3000 - Default value (ila PORT makaynch f .env)
const PORT = process.env.PORT || 3000;

// ========== CREATE SERVER ==========

/**
 * http.createServer() - Ki5le9 HTTP server
 * Ki akhod callback function: (req, res) => { ... }
 * req - Request object (info 3la request: URL, method, headers...)
 * res - Response object (bash nreddo response)
 */
const server = http.createServer((req, res) => {
  
  // ========== LOG REQUEST ==========
  
  // logger.logRequest() - Ki log request li dakhel
  // Ki emit event 'request:received'
  // Ki print: [timestamp] → GET /api/products
  logger.logRequest(req.method, req.url);
  
  // ========== INTERCEPT RESPONSE (POUR LOGGING) ==========
  
  // Bghina n log response ba3d maye5rej
  // ولكن res.end() ki5rej response directly
  // Solution: N override res.writeHead() o res.end()
  
  // originalWriteHead - N5zen original function
  const originalWriteHead = res.writeHead;
  
  // Override res.writeHead()
  // Ki replace b function jadida
  res.writeHead = function(statusCode, headers) {
    // N5zen statusCode f res object
    res.statusCode = statusCode;
    
    // Call original function (bash response يخرج normal)
    // this - res object
    // call() - Ki 3ayet function m3a context (this)
    originalWriteHead.call(this, statusCode, headers);
  };
  
  // originalEnd - N5zen original res.end()
  const originalEnd = res.end;
  
  // Override res.end()
  res.end = function(...args) {
    // Hna response غادي يخرج!
    
    // ========== LOG RESPONSE ==========
    
    // logger.logResponse() - Ki log response
    // Ki emit event 'response:sent'
    // Ki print: [timestamp] ← 200 /api/products
    logger.logResponse(res.statusCode, req.url);
    
    // Call original res.end() bash response يخرج
    // apply() - Ki 3ayet function m3a arguments
    originalEnd.apply(this, args);
  };
  
  // ========== ROUTE REQUEST ==========
  
  // router() - Ki7awel request l controller s7i7
  router(req, res);
});

// ========== START SERVER ==========

/**
 * server.listen() - Ki بدا server o يستمع l requests
 * PORT - Port number (ex: 3000)
 * Callback - Function ki execute ba3d server يبدا
 */
server.listen(PORT, () => {
  // ========== WELCOME MESSAGE ==========
  
  // Ki print message f console bash n3erfo server بدا
  console.log('  🚀 Smart Inventory System - Démarré     ');
  
  // Template string - Ki insert variables f string
  console.log(`  📡 Serveur: http://localhost:${PORT}       `);
  
  // new Date().toISOString() - Timestamp dial awel merra server بدا
  console.log(`   ⏰ Démarré à: ${new Date().toISOString()} `);
});
