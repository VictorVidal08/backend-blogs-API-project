const joi = require('joi');

const userSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required(),
    password: joi.string().min(6).required(),
    displayName: joi.string().min(8).required(),
    image: joi.string().required(),
});

const userValidation = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    // console.log(error.details[0].message);
    // console.log('uservalidation', authorization);
    if (error) return res.status(400).json({ message: error.details[0].message });
   
    next();
};

module.exports = {
    userValidation,
};