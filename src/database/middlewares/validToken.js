const tokenHelper = require('../helpers/token');

const validToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const dataToken = tokenHelper.verifyToken(authorization);
        console.log('DATATOKEN', dataToken);
        if (!authorization) return res.status(401).json({ message: 'Token not found' });
        if (!dataToken) return res.status(401).json({ message: 'Expired or invalid token' });
        next();
    } catch (error) {
        res.status(401).json({ message: 'Ver arquivo validToken' });
    }
};

module.exports = validToken;