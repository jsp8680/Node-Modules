const os = require('os');
const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime()
};
console.log(os.type());
console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.uptime());

console.log(server)

