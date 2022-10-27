const schemas = require('./schemas');

const validateUser = (body) => {
  const { error } = schemas.validate(body);
  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.message,
    };
  }
  return { type: null, message: '' };
};

module.exports = validateUser;