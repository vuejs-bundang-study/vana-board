import Redis from 'redis';
import { config } from '../constants/config';

const { redis: redisOptions } = config;
const hasRedisOptions = redisOptions.host && redisOptions.port;

export const redis = hasRedisOptions && Redis.createClient({
    ...redisOptions,
    retry_strategy: (options) => {
        console.error(options.error);
        return 60000;
    },
});

if (hasRedisOptions) {
    redis.on('connect', () => {
        console.log(`Redis server connected on ${redisOptions.host}:${redisOptions.port}`);
    });

    redis.on('error', (err) => {
        console.error(err);
    });
}
