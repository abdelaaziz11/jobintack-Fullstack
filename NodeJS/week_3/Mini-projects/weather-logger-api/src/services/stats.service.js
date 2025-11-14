import fs from "fs/promises";
import os from "os";
import config from "../config/index.js";

async function checkDataIntegrity() {
  try {
    const raw = await fs.readFile(config.dataFile, "utf-8");
    JSON.parse(raw);
    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export async function getSystemStatus() {
  const uptime = process.uptime(); // in seconds
  const load = os.loadavg();       // 1 min, 5 min, 15 min
  const memoryTotal = os.totalmem();
  const memoryFree = os.freemem();
  const memoryUsed = memoryTotal - memoryFree;

  const dataIntegrity = await checkDataIntegrity();

  return {
    system: {
      uptime: Math.round(uptime),
      load: {
        "1min": load[0].toFixed(2),
        "5min": load[1].toFixed(2),
        "15min": load[2].toFixed(2)
      },
      memory: {
        total: memoryTotal,
        used: memoryUsed,
        free: memoryFree,
        usagePercent: Number(((memoryUsed / memoryTotal) * 100).toFixed(2))
      }
    },
    data: {
      file: config.dataFile,
      integrity: dataIntegrity
    },
    api: {
      status: "OK",
      timestamp: new Date().toISOString()
    }
  };
}
