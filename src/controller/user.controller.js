const UserSevice = require('../service/user.service');
const { mapError } = require('../utils/errorMap');

const login = async (req, res) => {
  const { body } = req;

  const { type, message } = await UserSevice.login(body);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json({ token: message });
};

const createUser = async (req, res) => {
  const { body } = req;

  const { type, message } = await UserSevice.createUser(body);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json({ token: message });
};

const getUser = async (_req, res) => {
  const { message } = await UserSevice.getUsers();

  return res.status(200).json(message);
};

// https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW and 91646604726

module.exports = {
  login,
  createUser,
  getUser,
};