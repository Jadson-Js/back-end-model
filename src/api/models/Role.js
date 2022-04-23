module.exports = (sequelize, DataTypes) => {
   const Role = sequelize.define('Role', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    });
    Role.associate = function (models) {
        Role.hasMany(models.User, {
            as: 'users'
        }),
        Role.belongsToMany(models.Permission, {
            through: 'RolePermissions',
            as: 'permissions',
            foreignKey: 'RoleId',
        })
    }
    return Role;
}