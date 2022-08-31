const { Router } = require('express');

const validToken = require('../middlewares/validToken');

const postController = require('../controllers/post');

const postRouter = Router();

postRouter.get('/', validToken, postController.findAll);

postRouter.get('/:id', validToken, postController.findByPk);

module.exports = postRouter;