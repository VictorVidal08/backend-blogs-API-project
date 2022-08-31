const { Router } = require('express');

// const { categoryValidation } = require('../middlewares/categoryValidation');

const validToken = require('../middlewares/validToken');

const postController = require('../controllers/post');

const postRouter = Router();

postRouter.get('/', validToken, postController.findAll);

module.exports = postRouter;