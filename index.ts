import * as express from 'express';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import * as helmet from 'helmet'; 
import * as cors from 'cors';
import * as passportConfig from 'passport';

import { sequelize } from './models';
import { userAPIRouter } from 
class App {
  public application: express.Application;
  constructor() {
    this.application = express.default();
  }
}
const app = new App().application;
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('start');
});
app.listen(4000, () => console.log('start'));
