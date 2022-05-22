import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/restful_db', {
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

app.listen(3000, () => {
  console.log('server listening at port 3000');
});
