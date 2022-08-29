const loginService = require('../services/login');

const login = async (req, res) => {
    const { email, password } = req.body;
    // console.log('controller', email, password);
    const userData = { email, password };
    const result = await loginService.login(userData);
    // console.log(result);
    if (!result) return res.status(400).json({ message: 'Invalid fields' });
    return res.status(200).json({ token: result });
};

module.exports = {
    login,
};