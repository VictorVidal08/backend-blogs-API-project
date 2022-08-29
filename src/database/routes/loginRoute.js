const { Router } = require('express');

const { loginValidation } = require('../middlewares/loginValidation');

const { tokenValidate } = require('../middlewares/auth');

const loginController = require('../controllers/login');

const loginRouter = Router();

loginRouter.post('/', loginValidation, tokenValidate, loginController.login);

module.exports = loginRouter;