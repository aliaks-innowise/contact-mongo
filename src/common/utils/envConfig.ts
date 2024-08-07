import dotenv from 'dotenv';
import { cleanEnv, host, port, str, url } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
  MONGO_URI: url(),
  HOST: host(),
  PORT: port(),
  CORS_ORIGIN: str(),
});
