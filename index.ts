import * as express from 'express';
import * as dotenv from 'dotenv';
import { sequelize } from './models';
import config from './config/config';

dotenv.config();

const app = express();

const env =
  (process.env.NODE_ENV as 'production' | 'test' | 'development') ||
  'development';

const { database } = config[env];

// sequelize
//   .query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
//   .then(() => {
//     console.log('db 생성');
//   })
//   .catch(err => {
//     console.error(err);
//   });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('inflearn home');
});

app.listen(4000, () => console.log('server is running'));
