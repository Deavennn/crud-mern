import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apiRoute from './routes/api.js';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/learn_users_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.log(error);
});
db.once('open', () => {
  console.log('database connected');
});

app.use(cors());
app.use(express.json());
app.use('/api', apiRoute);

app.listen(8080, () => {
  console.log('server listening at port 3000');
});
