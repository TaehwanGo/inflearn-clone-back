import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('body', req);
  console.log('body', req.body);
  res.json({ req, res }); // json으로 parsing을 해야 되는 듯
});

router.get('/html', (req, res) => {
  console.log('res', res);
  res.send('<h1>hello world</h1>');
});

export default router;
