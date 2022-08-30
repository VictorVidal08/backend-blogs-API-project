const joi = require('joi');

const categorySchema = joi.object({
    name: joi.string().required(),
});

const categoryValidation = (req, res, next) => {
    const { error } = categorySchema.validate(req.body);
    // console.log(error.details[0].message);
    // console.log('uservalidation', authorization);
    if (error) return res.status(400).json({ message: error.details[0].message });
   
    next();
};

module.exports = {
    categoryValidation,
};