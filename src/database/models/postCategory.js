const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });
  
  PostCategory.associate = (models) => {
    // console.log(models);
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogpost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostCategory;
}

module.exports = PostCategory;