const { Op } = require('sequelize');
const { Funcionarios } = require('../models');

const getAll = async () => {
  const result = await Funcionarios.findAll();
  return result;
};

const findById = async (id) => {
  const result = await Funcionarios.findByPk(id);
  return result;
};

const update = async (employee, id) => {
  await Funcionarios.update(employee, {
    where: {
      id,
    },
  });
  const result = await findById(id);
  return result;
};

const insert = async (employee) => {
  const result = await Funcionarios.create(employee);
  return result;
};

const deleteEmployee = async (id) => {
  const checkEmployeeExists = await findById(id);
  if (!checkEmployeeExists) return null;
  await Funcionarios.destroy({
    where: {
      id,
    },
  });

  return true;
};

const findByField = async (query) => {
  console.log(query);
  const result = await Funcionarios.findAll({
    where: {
      [Op.and]: [
        { nome: { [Op.like]: `%${query.nome}%` } },
        { setor: { [Op.like]: `%${query.setor}%` } },
        { cargo: { [Op.like]: `%${query.cargo}%` } },
        { nivel: { [Op.like]: `%${query.nivel}%` } },

      ],
    },
  });
  return result;
};

module.exports = {
  insert,
  findById,
  update,
  deleteEmployee,
  getAll,
  findByField,
};
