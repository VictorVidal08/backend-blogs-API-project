const { Category } = require('../models');

const create = async (name) => {
    // ref: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate
    const [category, created] = await Category.findOrCreate({
        where: { name },
        defaults: {
            name,
        },
        });
        if (created) return category.dataValues;
    return false;
};

 const findAll = async () => {
        const result = await Category.findAll();
        return result;
 };
    
module.exports = {
    create, findAll,
};