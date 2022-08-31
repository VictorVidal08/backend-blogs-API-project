const postService = require('../services/post');

const findAll = async (_req, res) => {
    try {
        const result = await postService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ver arquivo postController' });
    }
};

module.exports = {
    findAll,
};