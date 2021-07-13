const statusCodeMessages = require('../utilities/listStatusMessages');

const checkFieldsIsEmpty = (fields) => {
  let result = true;
  Object.entries(fields).forEach((item) => {
    if (item[1] === '') {
      result = [item[0]];
    }
  });
  return result;
};

const checkFieldsIsNull = (fields) => {
  const fieldsCheck = {
    nome: fields.nome,
    email: fields.email,
    setor: fields.setor,
    cargo: fields.cargo,
    nivel: fields.nivel,
    data_nascimento: fields.data_nascimento,
    data_admissao: fields.data_admissao,
  };
  let result = true;
  Object.entries(fieldsCheck).forEach((item) => {
    if (item[1] === undefined) {
      result = [item[0]];
    }
  });
  return result;
};

const checkFieldsIsEmptyMiddleware = (req, res, next) => {
  const field = checkFieldsIsEmpty(req.body);
  if (field !== true) {
    res.status(statusCodeMessages.badRequest);
    return res.json({
      error: {
        message: `"${field}" field cannot be empty`,
      },
    });
  }
  return next();
};

const checkFieldsIsNullMiddleware = (req, res, next) => {
  const field = checkFieldsIsNull(req.body);
  if (field !== true) {
    res.status(statusCodeMessages.badRequest);
    return res.json({
      error: {
        message: `field "${field}" required`,
      },
    });
  }
  return next();
};

module.exports = {
  checkFieldsIsEmptyMiddleware,
  checkFieldsIsNullMiddleware,
};
