module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Funcionarios', [
      {
        nome: 'Guilherme',
        email: 'gui.s.a@live.com',
        data_nascimento: Sequelize.literal('CURRENT_TIMESTAMP'),
        data_admissao: Sequelize.literal('CURRENT_TIMESTAMP'),
        setor: 'Tecnologia',
        cargo: 'Desenvolvedor',
        nivel: 'junior',
        audit_data_insert: Sequelize.literal('CURRENT_TIMESTAMP'),
        audit_data_update: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        nome: 'Pedro',
        email: 'predro@hotmail.com',
        data_nascimento: Sequelize.literal('CURRENT_TIMESTAMP'),
        data_admissao: Sequelize.literal('CURRENT_TIMESTAMP'),
        setor: 'técnico',
        cargo: 'engenheiro',
        nivel: 'Senior',
        audit_data_insert: Sequelize.literal('CURRENT_TIMESTAMP'),
        audit_data_update: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Funcionarios', null, {}),
};
