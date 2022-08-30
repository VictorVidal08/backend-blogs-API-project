const { Router } = require('express');

const { loginValidation } = require('../middlewares/loginValidation');

const loginController = require('../controllers/login');

const loginRouter = Router();

loginRouter.post('/', loginValidation, loginController.login);

module.exports = loginRouter;