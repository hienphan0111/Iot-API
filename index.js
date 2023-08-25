import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import webApp from './api/web-app.js';
import flexy from './api/flexy.js';
import { mongoConnect } from './db/db.js';


const app = express();
app.use(bodyParser.json());
dotenv.config();

app.use('/api/web-app', webApp);
app.use('/api/flexy', flexy);

app.get('/', (req, res) => {
  res.status(200).send('test api');
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send('data received');
})

app.put('/', (req, res) => {
  console.log(req.body.email);
  res.status(200).send('data received');
})

mongoConnect();

app.listen(3000, () => {
  console.log('server started');
})
