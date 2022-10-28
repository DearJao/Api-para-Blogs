const { BlogPost } = require('../models');
// const validator = require('./validations/validator');

// const verifyCategory = async (categoryIds) => {
//   const categoryData = categoryIds.map((id) => Category.findOne(id));

//   const resolvedPromisse = await Promise.all(categoryData);
//   const someResult = resolvedPromisse.some((category) => category === undefined);
// if (someResult) {
//     return {
//       type: 'CATEGORY_NOT_EXISTS',
//       message: 'one or more "categoryIds" not found',
//     };
//   }
// };

// const createPost = async (data, user) => {
//   const error = validator.validatePost(user);
//   if (error.type) return error;

//   const { categoryIds } = data;

//   const result = await verifyCategory(categoryIds);
//   if (result.type) {
//     return { type: type, message: message };
//   }

//   const { dataValues } = await BlogPost.create({
//     title: data.title,
//     content: data.content,
//     userId: user.id,
//     published: new Date(),
//     updated: new Date(),
//   });
//   return { type: null, message: dataValues };
// };

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['userId'] },
    include: { all: true, attributes: { exclude: ['password'] } },
  });

  console.log(posts);

  return { type: null, message: posts };
};

module.exports = {
  // createPost,
  getPosts,
};