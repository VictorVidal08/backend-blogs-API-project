const { BlogPost, User, Category } = require('../models');

 const findAll = async () => {
    const result = await BlogPost.findAll({
        include: [{
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password'],
          }, 
        }, {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        }],
      });
    return result;
 };
    
module.exports = {
    findAll,
};