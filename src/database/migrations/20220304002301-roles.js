// 'use strict';


 module.exports = {
   up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('Roles',{ 
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(32),
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(498),
        unique: false,
        allowNull: false,
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
     })
   },
   down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('Roles');
   }
 };