const userService = require('../services/user');
const token = require('../helpers/token');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const userObject = {
        displayName, email, password, image,
    };
    try {
        const result = await userService.create(userObject);
        console.log('RESULT', result);
        if (!result) return res.status(409).json({ message: 'User already registered' });
        const userToken = token.createToken({ email });
        return res.status(201).json({ token: userToken });
    } catch (error) {
        return res.status(401).json({ message: 'ver arquivo userController' });
    }
};

const findAll = async (_req, res) => {
    try {
        const result = await userService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'ver arquivo userController' });
    }
};

const findByPk = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.findByPk(id);
        // console.log(result);
        if (!result) return res.status(404).json({ message: 'User does not exist' });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'ver findByPk controller' });
    }
};

module.exports = {
    create, findAll, findByPk,
};