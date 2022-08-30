const { Category } = require('../models');

const create = async (name) => {
    try {
        // ref: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate
        const [category, created] = await Category.findOrCreate({
            where: { name },
            defaults: {
              name,
            },
          });
          if (created) return category.dataValues;
        //   console.log('created', created);
        //   console.log('category', category);
          return false;
    } catch (error) {
        console.error(error);
        return error;
    }
};

 const findAll = async () => {
    try {
        const result = await Category.findAll();
        return result;
    } catch (error) {
        return error;
    }
 };
    
module.exports = {
    create, findAll,
};