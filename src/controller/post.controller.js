const PostSevice = require('../service/post.service');
const { mapError } = require('../utils/errorMap');

const createPost = async (req, res) =>
  // const { body: data, user } = req;

  // const { type, message } = await PostSevice.createPost(data, user);

  // if (type) return res.status(mapError(type)).json({ message });

  res.status(200).send('em andamento');

const getPosts = async (_req, res) => {
  const { type, message } = await PostSevice.getPosts();

  if (type) return res.status(mapError(type)).json(message);

  return res.status(200).json(message);
};

module.exports = {
  createPost,
  getPosts,
};