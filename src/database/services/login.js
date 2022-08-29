const { User } = require('../models');

const { createToken } = require('../helpers/token'); 

const login = async (userData) => {
    const { email } = userData;
    const result = await User.findOne({
        logging: console.log, // habilita a resposta do sequelize dentro do console.log;
        attributes: [
            'email', 'password',
        ],
        where: { email },
        raw: true, // sequelize retorna uma classe. raw faz com que retorne uma classe como objeto.
    });
    // console.log('service', email, password);
    // console.log('serviceResult', result);
    if (!result) return null;
    if (result.password !== userData.password) return null;
    return createToken({ email });
};
    
module.exports = {
    login,
};