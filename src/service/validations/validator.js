const { userSchema, postSchema } = require('./schemas');

const validateUser = (body) => {
  const { error } = userSchema.validate(body);
  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.message,
    };
  }
  return { type: null, message: '' };
};

const validatePost = (body) => {
  const { error } = postSchema.validate(body);
  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.message,
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateUser,
  validatePost,
};