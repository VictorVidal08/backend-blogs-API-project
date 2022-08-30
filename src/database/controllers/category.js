const categoryService = require('../services/category');

const create = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await categoryService.create(name);
        // console.log('RESULT', result);
        if (!result) return res.status(401).json({ message: 'this category already exists' });
        return res.status(201).json(result);
    } catch (error) {
        return error;
    }
};

const findAll = async (_req, res) => {
    try {
        const result = await categoryService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'ver arquivo categoryController' });
    }
};

module.exports = {
    create, findAll,
};