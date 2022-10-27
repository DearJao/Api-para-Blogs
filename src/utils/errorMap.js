const errorMap = {
  BAD_REQUEST: 400,
  USER_EXISTS: 409,
  USER_NOT_EXISTS: 404,
  CATEGORY_EXISTS: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};