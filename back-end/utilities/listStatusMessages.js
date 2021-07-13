const update = 201;
const success = 200;
const notFound = 404;
const conflict = 409;
const badRequest = 400;
const internalError = 500;
const noContent = 204;

const nicknameExists = {
  statusCode: conflict,
  errorMessage: {
    error: {
      message: 'nickname already exists',
    },
  },
};
const nicknameNotExists = {
  statusCode: notFound,
  errorMessage: {
    error: {
      message: 'nickname does not exist',
    },
  },
};

const invalidSizeNick = {
  statusCode: badRequest,
  errorMessage: {
    error: {
      message: 'nickname cannot be longer than 30 characters',
    },
  },
};

const invalidSizeBio = {
  statusCode: badRequest,
  errorMessage: {
    error: {
      message: 'bio cannot be longer than 100 characters',
    },
  },
};

const fieldNull = (field) => ({
  statusCode: badRequest,
  errorMessage: {
    error: {
      message: `field ${field} required`,
    },
  },
});

const fieldInvalid = (field) => ({
  statusCode: badRequest,
  errorMessage: {
    error: {
      message: `${field} field cannot be empty`,
    },
  },
});

const UserNotFound = {
  statusCode: notFound,
  errorMessage: {
    error: {
      message: 'employee not found',
    },
  },
};

module.exports = {
  internalError,
  update,
  success,
  nicknameExists,
  nicknameNotExists,
  UserNotFound,
  invalidSizeBio,
  invalidSizeNick,
  noContent,
  fieldNull,
  fieldInvalid,
};
