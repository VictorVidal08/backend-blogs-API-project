const { Router } = require('express');

const { categoryValidation } = require('../middlewares/categoryValidation');

const validToken = require('../middlewares/validToken');

const categoriesController = require('../controllers/category');

const categoriesRouter = Router();

categoriesRouter.post('/', validToken, categoryValidation, categoriesController.create);

categoriesRouter.get('/', validToken, categoriesController.findAll);

module.exports = categoriesRouter;