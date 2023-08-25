import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send('send to web app');
});

export default router;
