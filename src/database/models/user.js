const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Users',
    });
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        as: 'User',
        foreignKey: 'userId',
      });
    };
  return User;
}

module.exports = User;