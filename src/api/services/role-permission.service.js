const {RolePermission, Role, Permission} = require('@models')

const rolePermissionService = {
    async getRelationships () {
        let relationships = await RolePermission.findAll() 
        
        return relationships
    },

    async getRelationshipById(id) {
        let relationship = await RolePermission.findByPk(id) 
        
        return relationship
    },


    async createRelationship(relationship) {
        return await RolePermission.create({ RoleId: relationship.RoleId, PermissionId: relationship.PermissionId });
    },

    async deleteRelationshipById(id) {
        return await RolePermission.destroy({
            where: { id: id }
        })
    }
}


module.exports = rolePermissionService