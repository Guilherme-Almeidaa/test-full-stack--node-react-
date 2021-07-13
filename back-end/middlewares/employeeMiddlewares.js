const checkFieldsIsEmpty = (fields) => {
  let result = true;
  Object.entries(fields).forEach((item) => {
    if (item[1] === '') {
      result = [item];
    }
  });
  return result;
};

const checkFieldsIsEmptyMiddleware = (req, res, next) => {
  const field = checkFieldsIsEmpty(req.body);
  if (field !== true) {
    res.status(404);
    return res.json({
      error: {
        message: `${field} field cannot be empty`,
      },
    });
  }
  return next();
};

module.exports = {
  checkFieldsIsEmptyMiddleware,
};
