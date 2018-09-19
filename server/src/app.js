const { env } = require('./constant/env');
const { port } = require('./constant/config').server;

console.log(env.isProduction, port);
