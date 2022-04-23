const {Permission, Role} = require('@models')

const RolesService = {
    async getPermissions () {
        let permissions = await Permission.findAll() 
        
        return permissions
    },

    async getPermissionById(id) {
        let permission = await Permission.findByPk(id, {
            include: {model: Role, as: 'roles'}
        }) 
        
        return permission
    },

    async getPermissionByTitle(title) {
        let permission = await Permission.findOne({
            where: {title: title}
        })
        
        return permission
    },

    async createPermission(permission) {
        return await Permission.create({ title: permission.title, description: permission.description });
    },

    async deletePermissionById(id) {
        return await Permission.destroy({
            where: { id: id }
        })
    }
}


module.exports = RolesService