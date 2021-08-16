import * as express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  console.log('body', req);
  console.log('body', req.body);
  res.json({ id: 1234, result: 'ok' });
});

export default router;
