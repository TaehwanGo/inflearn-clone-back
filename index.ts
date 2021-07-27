import * as express from 'express';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser'
import * as expressSession from 'express-session';
import * as hpp from 'hpp';
import * as helmet from 'helmet'; 
import * as cors from 'cors';

import passportConfig from './passport';
import { sequelize } from './models';
// import userAPIRouter from './routes/user';
// import postAPIRouter from './routes/post';

const prod = process.env.NODE_ENV === 'production'; 
dotenv.config();
const app = express();
sequelize.sync({ force: false }) 
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch((e: Error) => {
    console.error(e); 
  });
passportConfig();


  if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
      origin: /infron\.com$/,
      credentials: true,
    })); 
  } else {
    app.use(morgan('dev'));
    app.use(cors({
      origin: true,
      credentials: true,
    }));
  }

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET!,
  cookie: {
    httpOnly: true,
    secure: false, 
    domain: prod ? '.infron.com' : undefined,
  },
  name: 'rnbck',
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('서버 정상 동작!');
});


// app.use('/api/user', userAPIRouter);
// app.use('/api/post', postAPIRouter);

app.listen(prod ? process.env.PORT : 3060, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
