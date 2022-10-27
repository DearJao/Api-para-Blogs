const { Category } = require('../models');

const createCategories = async (body) => {
  const { name } = body;

  if (!name) {
    return { type: 'BAD_REQUEST', message: '"name" is required' };
  }

  const verifyCategory = await Category.findOne({
    where: { name },
  });

  if (verifyCategory) {
    return { type: 'CATEGORY_EXISTS', message: 'Category already exists' };
  }

  console.log('ó eu aqui', name);
  const { dataValues } = await Category.create({ name });

  const category = await Category.findOne({
    where: { id: dataValues.id },
  });

  return { type: null, message: category };
};

const getCategories = async () => {
  const categories = await Category.findAll({});

  return { type: null, message: categories };
};

module.exports = {
  createCategories,
  getCategories,
};