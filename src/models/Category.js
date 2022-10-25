module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', { 
    id: {
      autoIncrement: true,
      prymaryKey: true,
      type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  },
  {
    underscored: true,
  });

  return Category;
};