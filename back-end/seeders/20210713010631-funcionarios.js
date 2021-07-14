module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Funcionarios', [
      {
        nome: 'Guilherme',
        email: 'gui.s.a@live.com',
        data_nascimento: Sequelize.literal('CURRENT_TIMESTAMP'),
        data_admissao: Sequelize.literal('CURRENT_TIMESTAMP'),
        setor: 'Compras',
        cargo: 'Auxiliar',
        nivel: 'Junior',
        audit_data_insert: Sequelize.literal('CURRENT_TIMESTAMP'),
        audit_data_update: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        nome: 'Pedro',
        email: 'pedro@hotmail.com',
        data_nascimento: Sequelize.literal('CURRENT_TIMESTAMP'),
        data_admissao: Sequelize.literal('CURRENT_TIMESTAMP'),
        setor: 'Engenharia',
        cargo: 'Engenheiro',
        nivel: 'Senior',
        audit_data_insert: Sequelize.literal('CURRENT_TIMESTAMP'),
        audit_data_update: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Funcionarios', null, {}),
};
