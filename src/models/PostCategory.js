module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: "posts_categories",
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: "blog_posts",
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };

  return PostCategory;
};