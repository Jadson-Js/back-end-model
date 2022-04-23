module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Permission.associate = function (models) {
        Permission.belongsToMany(models.Role, {
           through: 'RolePermissions',
           as: 'roles',
           foreignKey: 'PermissionId'
        })
    }
    return Permission;
}