'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('cpudata', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price_idr: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tdp: {
        type: Sequelize.STRING,
        allowNull: false
      },
      core_clock: {
        type: Sequelize.STRING,
        allowNull: false
      },
      core_count: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_gaming: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('cpudata');
     
  }
};