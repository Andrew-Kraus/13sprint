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

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
// 1 Итерация //
