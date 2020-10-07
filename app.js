const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();
const getUser = require('./routes/users');
const getCard = require('./routes/cards');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f6fa2bb6843ad35d06b8b5e',
  };

  next();
});

app.use('/users', getUser);
app.use('/cards', getCard);

app.use('/', (req, res) => {
  res.set({ 'Content-type': 'Application/json, Charset=utf-8' });
  res.status(404).end(JSON.stringify({ message: 'Запрашиваемый ресурс не найден' }), 'utf8');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
// 2 Итерация //
