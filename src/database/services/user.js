const { User } = require('../models');

const create = async (userObject) => {
    // ref: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate
    const [user, created] = await User.findOrCreate({
        where: { email: userObject.email },
        defaults: {
            displayName: userObject.displayName,
            email: userObject.email,
            password: userObject.password,
            image: userObject.image,
        },
        });
        if (created) return user.dataValues;
    return false;
};

const findAll = async () => {
    // ref: https://stackoverflow.com/questions/31679838/sequelizejs-findall-exclude-field
    const result = await User.findAll({ attributes: { exclude: ['password'] } });
    return result;
};

const findByPk = async (id) => {
    const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return result;
};
    
module.exports = {
    create, findAll, findByPk,
};