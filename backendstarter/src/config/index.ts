import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("🛑 Couldn't find .env file 🛑");
}

export default {
  // Port
  port: process.env.PORT,

  // DB Environment Variables
  dbURL: process.env.DB_URI,
  dbName: process.env.DB_NAME,

  // Token Secrets
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,

  // Redis Environment Variables
  redisPort: process.env.REDIS_PORT,
  redisHost: process.env.REDIS_HOST,

  // Logger Environment Variables if needed
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
