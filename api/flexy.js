import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send('data received');
});

export default router;
