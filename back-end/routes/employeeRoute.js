const express = require('express');

const route = express.Router();
const employeeController = require('../controllers/employeeController');
const middleware = require('../middlewares/employeeMiddlewares');

route.get('/', employeeController.getAll);
route.get('/search', employeeController.findByField);
route.get('/:id', employeeController.findById);
route.post('/register',
  middleware.checkFieldsIsNullMiddleware,
  middleware.checkFieldsIsEmptyMiddleware,
  employeeController.insert);
route.put('/update/:id',
  middleware.checkFieldsIsNullMiddleware,
  middleware.checkFieldsIsEmptyMiddleware,
  employeeController.update);
route.delete('/delete/:id', employeeController.deleteEmployee);

module.exports = route;
