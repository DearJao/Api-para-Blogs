module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
    });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreingKey: 'user_id',
      as: 'posts',
    })
  }

  return User;
};