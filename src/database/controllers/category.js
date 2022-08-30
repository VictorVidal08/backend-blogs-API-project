const categoryService = require('../services/category');

const create = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await categoryService.create(name);
        console.log('RESULT', result);
        return res.status(201).json(result);
    } catch (error) {
        return error;
    }
};

module.exports = {
    create,
};