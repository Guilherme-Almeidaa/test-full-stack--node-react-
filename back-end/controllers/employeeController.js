const employeeService = require('../services/employeeService');
const statusCodeMessages = require('../utilities/listStatusMessages');

const getAll = async (req, res) => {
  try {
    const result = await employeeService.getAll();
    res.status(statusCodeMessages.success);
    return res.json(result);
  } catch (error) {
    res.status(statusCodeMessages.internalError);
    return res.json({
      error: {
        message: 'Internal error',
      },
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeService.findById(id);
    if (!result) {
      res.status(statusCodeMessages.UserNotFound.statusCode);
      return res.json(statusCodeMessages.UserNotFound.errorMessage);
    }
    res.status(statusCodeMessages.success);
    return res.json(result);
  } catch (error) {
    res.status(statusCodeMessages.internalError);
    return res.json({
      error: {
        message: 'Internal error',
      },
    });
  }
};

const update = async (req, res) => {
  try {
    const date = new Date();
    const employee = { ...req.body, audit_data_update: date };
    const { id } = req.params;
    const result = await employeeService.update(employee, id);
    if (!result) {
      res.status(statusCodeMessages.UserNotFound.statusCode);
      return res.json(statusCodeMessages.UserNotFound.errorMessage);
    }
    res.status(statusCodeMessages.update);
    return res.json(result);
  } catch (error) {
    res.status(statusCodeMessages.internalError);
    return res.json({
      error: {
        message: 'Internal error',
      },
    });
  }
};

const insert = async (req, res) => {
  try {
    const date = new Date();
    const newEmploye = { ...req.body, audit_data_insert: date };
    const result = await employeeService.insert(newEmploye);
    res.status(statusCodeMessages.update);
    return res.json(result);
  } catch (error) {
    res.status(statusCodeMessages.internalError);
    return res.json({
      error: {
        message: 'Internal error',
      },
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeService.deleteEmployee(id);
    if (!result) {
      res.status(statusCodeMessages.UserNotFound.statusCode);
      return res.json(statusCodeMessages.UserNotFound.errorMessage);
    }
    return res.status(statusCodeMessages.noContent).end();
  } catch (error) {
    res.status(statusCodeMessages.internalError);
    return res.json({
      error: {
        message: 'Internal error',
      },
    });
  }
};

const findByField = async (req, res) => {
  try {
    const { query } = req;
    const result = await employeeService.findByField(query);
    res.status(statusCodeMessages.success);
    return res.json(result);
  } catch (error) {
    res.status(statusCodeMessages.internalError);
    return res.json({
      error: {
        message: 'Internal error',
      },
    });
  }
};

module.exports = {
  insert,
  findById,
  update,
  deleteEmployee,
  getAll,
  findByField,
};
