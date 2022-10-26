const UserSevice = require('../service/user.service');
const { mapError } = require('../utils/errorMap');

const login = async (req, res) => {
  const { body } = req;

  const { type, message } = await UserSevice.getUser(body);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json({ token: message });
};

// 91646604726 and https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW

module.exports = { login };