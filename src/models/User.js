module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { 
    id: {
      autoIncrement: true,
      prymaryKey: true,
      type: DataTypes.INTEGER },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
  });

  return User;
};