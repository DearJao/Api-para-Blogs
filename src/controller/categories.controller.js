const categoriesSevice = require('../service/categories.service');
const { mapError } = require('../utils/errorMap');

const createCategory = async (req, res) => {
  const { body } = req;
  console.log(body);

  const { type, message } = await categoriesSevice.createCategories(body);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
};

const getCategory = async (_req, res) => {
  const { message } = await categoriesSevice.getCategories();

  return res.status(200).json(message);
};

// https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW and 91646604726

module.exports = {
  createCategory,
  getCategory,
};