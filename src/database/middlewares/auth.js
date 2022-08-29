const tokenHelper = require('../helpers/token');

const tokenValidate = (req, res, next) => {
    const { authData } = req.body;
    try {
        const dataToken = tokenHelper.verifyToken(authData);
        console.log(dataToken);
        // console.log('auth', req.body);
        next();
    } catch (error) {
        console.log('auth', req.body);
        res.status(400).json({ message: 'Invalid fields' });
    }
};

module.exports = { tokenValidate };