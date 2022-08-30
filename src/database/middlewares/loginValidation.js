const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().min(2).max(30).required(),
    password: joi.string().min(4).max(10).required(),
});

const loginValidation = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    // console.log('TOKEN', authorization);
    if (error) return res.status(400).json({ message: 'Some required fields are missing' });
    next();
};

module.exports = {
    loginValidation,
};