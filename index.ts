import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { sequelize } from './models';
import config from './config/config';
import lectureRouter from './routes/lecture';
import testRouter from './routes/test';

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

app.use(
  cors({
    origin: true,
    // credentials: false
  }),
);

app.use(express.json()); // front에서 json형태의 data를 보낼때 그것을 req.body에 넣어줌
app.use(express.urlencoded({ extended: true })); // form&submit을 하면 url encoded방식으로 data가 넘어오는데 그것을 req.body에 넣어줌

app.use('/test', testRouter);

app.use('/create_course', lectureRouter);

app.get('/', (req: express.Request, res: express.Response) => {
  // console.log('req', req);
  // console.log('res', res);
  res.send('inflearn home');
});

app.listen(4000, () => console.log('server is running'));
