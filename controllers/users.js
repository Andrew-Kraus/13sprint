const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Ошибка' }));
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.id)
    .orFail(() => new Error('notFound'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.message === 'notFound') {
        res.status(404).send({ message: 'Такого пользователя не существует' });
      }
      res.status(500).send({ message: 'Ошибка' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(400).send({ message: 'Ошибка' }));
};
