 'use strict';


 module.exports = {
   up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('Users',{ 
      id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING(32),
        unique: true,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING(256),
        unique: false,
        allowNull: false,
      },
      RoleId:{
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: true,
        references:{
          model: 'Roles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
     })
     },
   down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
   }
 };