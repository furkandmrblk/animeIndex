import redis from 'redis';
import config from '../config/index';

// Create the redis client to store the refreshtokens
const client = redis.createClient({
  port: 6379, //config.redisPort
  host: config.redisHost,
});

client.on('connect', () => {
  console.log('🔧  Client connected to redis 🔧');
});

client.on('ready', () => {
  console.log('🔧  Redis-Client ready to use 🔧');
});

client.on('error', (err: { message: string }) => {
  console.log(err.message);
});

client.on('end', () => {
  console.log('🔧  Client disconnected from redis 🔧');
});

client.on('SIGINT', () => {
  client.quit();
});

module.exports = client;
