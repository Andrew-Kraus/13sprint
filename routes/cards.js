const cardRouter = require('express').Router();

const { getCard, deleteCard, createCard } = require('../controllers/cards');

cardRouter.get('/', getCard);

cardRouter.delete('/:id', deleteCard);

cardRouter.post('/', createCard);

module.exports = cardRouter;
