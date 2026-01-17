import os from 'os';

export function getOSInfo() {
  return {
    platform: os.platform(),
    freeMemoryGB: (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
    homeDir: os.homedir(),
    hostname: os.hostname(),
    network: os.networkInterfaces()
  };
}

export function checkMemory() {
  return os.freemem() > 4 * 1024 * 1024 * 1024;
}

export function showOSInfoByMode() {
  if (process.env.MODE === 'admin') {
    console.log(getOSInfo());
  } else {
    console.log('Нет прав доступа');
  }
}