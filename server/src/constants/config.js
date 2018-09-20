import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { isProduction } from './env';

let doc = null;

try {
    doc = yaml.safeLoad(fs.readFileSync(path.resolve(`config/config.${isProduction ? 'production' : 'development'}.yml`), 'utf8'));
    if (!doc) {
        doc = null;
    }
} catch (e) {
    throw new Error(e);
}

if (!doc) {
    throw new Error(`Invalid configurations. (check config.${isProduction ? 'production' : 'development'}.yml)`);
}

export const config = doc;
