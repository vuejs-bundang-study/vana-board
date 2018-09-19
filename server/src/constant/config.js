const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { env } = require('./env');

let config = null;

try {
    config = yaml.safeLoad(fs.readFileSync(path.resolve(`config/config.${env.isProduction ? 'production' : 'development'}.yml`), 'utf8'));
    if (!config) {
        config = null;
    }
} catch (e) {
    throw new Error(e);
}

if (!config) {
    throw new Error(`Invalid configurations. (check config.${env.isProduction ? 'production' : 'development'}.yml)`);
}

module.exports = config;
