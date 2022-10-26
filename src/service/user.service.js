const { User } = require('../models');
const tokenGenerate = require('./token/token.generate');

const getUser = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
  return { type: 'BAD_REQUEST', message: 'Some required fields are missing' };
  }

  const user = await User.findOne({
    where: { email },
  });
  console.log(user);
  if (!user || user.password !== password) {
    return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  }

  const token = tokenGenerate({ data: { userId: user.id } });

  return { type: null, message: token };
};

module.exports = { getUser };