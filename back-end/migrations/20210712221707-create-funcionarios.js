
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      data_nascimento:{
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      data_admissao:{
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      setor: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      cargo: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      nivel: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      audit_data_insert: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
      audit_data_update: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('funcionarios');
  }
};