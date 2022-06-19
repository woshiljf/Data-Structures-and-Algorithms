const os = require('os');

const threads = os.cpus.length;

console.log('cpu核', threads);
