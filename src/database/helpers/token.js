const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
    // console.log('TOKEN payload', payload);
    // console.log('JWTS', JWT_OPTIONS);
    const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);
    return token;
};

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        return payload;
    } catch (error) {
        return null;
    }
};

module.exports = { createToken, verifyToken };