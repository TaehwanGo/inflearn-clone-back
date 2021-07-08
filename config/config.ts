import * as dotenv from 'dotenv';

dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  [key: string]: string;
};

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME || 'inflearn-clone',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME || 'inflearn-clone',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME || 'inflearn-clone',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
};

export default config;
