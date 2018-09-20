import winston from 'winston';
import 'winston-daily-rotate-file';
import { logRoot } from '../constants/path';

const tsFormat = () => (new Date()).toLocaleTimeString();

// error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5
export const logger = new (winston.Logger)({
    level: 'info',
    transports: [
        // colorize the output to the console
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
        }),
        new (winston.transports.DailyRotateFile)({
            filename: `${logRoot}/log`,
            timestamp: tsFormat,
            json: false,
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            maxDays: 14,
            localTime: true,
            level: 'info',
        }),
    ],
});
