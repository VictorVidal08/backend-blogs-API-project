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

const findByPk = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postService.findByPk(id);
        // console.log(result);
        if (!result) return res.status(404).json({ message: 'Post does not exist' });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'ver findByPk controller' });
    }
};

module.exports = {
    findAll, findByPk,
};