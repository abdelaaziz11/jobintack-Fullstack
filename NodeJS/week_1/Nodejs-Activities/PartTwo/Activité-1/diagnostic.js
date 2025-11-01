// import the os 
const os = require('os')

// connsole log the os methods
console.log("Platforme :", os.platform());
console.log("Architecture :", os.arch());
console.log("CPU :", os.cpus().length, "cours");
console.log("Memorie total :", os.totalmem());
console.log("Lelorie libre :", os.freemem());
console.log("Uptime (en heures)  :", (os.uptime() / 3600).toFixed(2));




// Discussion:
// os.platform renvoie le type de système d’exploitation (ex : darwin, linux, win32)
// os.arch renvoie l’architecture du processeur (ex : x64, arm)

// Utile dans une app (ex : tableau de bord système) pour afficher les infos système ou adapter le code selon l’OS ou l’architecture