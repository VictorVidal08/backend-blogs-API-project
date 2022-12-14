const { Router } = require('express');

const { userValidation } = require('../middlewares/userValidation');

const validToken = require('../middlewares/validToken');

const userController = require('../controllers/user');

const userRouter = Router();

userRouter.post('/', userValidation, userController.create);

userRouter.get('/', validToken, userController.findAll);

userRouter.get('/:id', validToken, userController.findByPk);

module.exports = userRouter;