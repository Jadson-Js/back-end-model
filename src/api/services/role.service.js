const {Role, Permission, User} = require('@models')

const RolesService = {
    async getRoles () {
        let role = await Role.findAll() 
        
        return role
    },

    async getRoleById(id) {
        let role = await Role.findByPk(id, {
            include: [{model: User, as: 'users'}, {model: Permission, as: 'permissions'}]
        }) 
        
        return role
    },

    async getRoleByTitle(title) {
        let role = await Role.findOne({
            where: {title: title}
        })
        
        return role
    },

    async getRoleByEmail(email) {
        let role = await Role.findOne({
            where: {email: email}
        })
        
        return role
    },

    async createRole(role) {
        return await Role.create({ title: role.title, description: role.description });
    },

    async deleteRoleById(id) {
        return await Role.destroy({
            where: { id: id }
        })
    }
}


module.exports = RolesService