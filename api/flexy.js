import { Router } from 'express';
import Data from '../models/Data.js';

const router = Router();

router.post('/', async (req, res) => {
  const num = {
    quantity: req.body.count,
  };

  const data = Data.create(num);

  res.status(201).send('data received');
});

export default router;
