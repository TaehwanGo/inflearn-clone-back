import * as dotenv from 'dotenv';

dotenv.config();

type IConfig = {
  username: string,
  password: string,
  database: string, 
  [key: string]: any,
};

interface IConfigGroup {
  development: IConfig;
  test: IConfig;
  production: IConfig;
}


const config: IConfigGroup = {
  development: {
    username: 'root',
    password: '112',
    database: 'infron-base',
    host: '127.0.0.1',
    dialect: 'mysql', 
  },
  test: {
    username: 'root',
    password: '112',
    database: 'infron-base',
    host: '127.0.0.1',
    dialect: 'mysql', 
  },
  production: {
    username: 'root',
    password: '112',
    database: 'infron-base',
    host: '127.0.0.1',
    dialect: 'mysql', 
  },
};

export default config; 

// import * as dotenv from 'dotenv';
// dotenv.config();

// type Config = {
//   username: string;
//   password: string;
//   database: string;
//   host: string;
//   [key: string]: string;
// };

// interface IConfigGroup {
//   development: Config;
//   test: Config;
//   production: Config;
// }

// export const config: IConfigGroup = {
//   development: {
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD!,
//     database: process.env.DB_NAME || 'inflearn-clone',
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'mysql',
//   },
//   test: {
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD!,
//     database: process.env.DB_NAME || 'inflearn-clone',
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'mysql',
//   },
//   production: {
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD!,
//     database: process.env.DB_NAME || 'inflearn-clone',
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'mysql',
//   },
// };
