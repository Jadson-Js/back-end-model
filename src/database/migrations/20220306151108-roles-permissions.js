'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('RolePermissions', {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      RoleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      PermissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Permissions',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RolePermissions');
  }
};