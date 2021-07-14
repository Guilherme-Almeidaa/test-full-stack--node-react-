const statusCodeMessages = require('../utilities/listStatusMessages');

const checkFieldsIsEmpty = (fields) => {
  let result = true;
  /* verifica se algum campo esta vazio
     se estiver retorna o nome do campo caso contrario retorna true
  */
  Object.entries(fields).forEach((item) => {
    if (item[1] === '') {
      result = [item[0]];
    }
  });
  return result;
};

const checkFieldsIsNull = (fields) => {
  /* verifica se algum campo não existe
     se não existir retorna o nome do campo caso contrario retorna true
  */
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
  /*
   Aqui formato o nome o campo para ficar idêntico ao formulaŕio
   para facilitar o entendimento do usuário.
  */
  const fieldConvert = field.toString();
  const fieldFormated = fieldConvert.toString()[0].toUpperCase() + fieldConvert.substr(1);
  if (field !== true) {
    res.status(statusCodeMessages.badRequest);
    return res.json({
      error: {
        message: `O campo "${fieldFormated.replace('_', ' de ')}" não pode estar vazio`,
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

const checkFormatEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const CheckFormatEmailMiddleware = (req, res, next) => {
  if (!checkFormatEmail(req.body.email)) {
    res.status(statusCodeMessages.badRequest);
    return res.json({
      error: {
        message: 'Email inválido',
      },
    });
  }
  return next();
};

module.exports = {
  checkFieldsIsEmptyMiddleware,
  checkFieldsIsNullMiddleware,
  CheckFormatEmailMiddleware,
};
