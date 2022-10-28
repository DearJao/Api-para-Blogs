const { User } = require('../models');
const tokenGenerate = require('./token/token.generate');
const validator = require('./validations/validator');

const login = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
    return { type: 'BAD_REQUEST', message: 'Some required fields are missing' };
  }

  const user = await User.findOne({
    where: { email },
  });

  if (!user || user.password !== password) {
    return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  }

  const token = tokenGenerate({ data: { userId: user.id } });

  return { type: null, message: token };
};

const createUser = async (body) => {
  const error = validator.validateUser(body);
  if (error.type) return error;

  const { email } = body;
  const user = await User.findOne({
    where: { email },
  });

  if (user) return { type: 'USER_EXISTS', message: 'User already registered' };

  const { dataValues } = await User.create(body);

  const token = tokenGenerate({ data: { userId: dataValues.id } });

  return { type: null, message: token };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return { type: null, message: users };
};

const getUsersById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { type: 'USER_NOT_EXISTS', message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = {
  login,
  createUser,
  getUsers,
  getUsersById,
};