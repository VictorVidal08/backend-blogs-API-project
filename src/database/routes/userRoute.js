const { Router } = require('express');

const { userValidation } = require('../middlewares/userValidation');

// const token = require('../helpers/token');

const userController = require('../controllers/user');

const userRouter = Router();

userRouter.post('/', userValidation, userController.create);

userRouter.get('/', userController.findAll);

module.exports = userRouter;