const rolePermissionService = require('@services/role-permission')
const roleService = require('@services/role')
const permissionService = require('@services/permission')
const { logDefault, logRole, logPermission, logRolePermission } = require('@utils/constants')

const rolePermissionsControllers = {
    async getRelationships(req, res) {
        try {
            const relationships = await rolePermissionService.getRelationships()

            res.status(200).json({
                status: 200,
                data: relationships
            })
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async getRelationshipById(req, res) {
        const id = req.params.relationshipId

        try {
            const relationship = await rolePermissionService.getRelationshipById(id)

            if (!relationship) {
                res.sendError(logRolePermission.relationshipNotFound, 404)
            } else {
                res.status(200).json({
                    status: 200,
                    data: relationship
                })
            }
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }

    },

    async createRolePermission(req, res) {
        const relationship = {
            RoleId: req.body.RoleId,
            PermissionId: req.body.PermissionId
        }

        try {
            const roleIdAlreadyExist = await roleService.getRoleById(relationship.RoleId)

            if (roleIdAlreadyExist === undefined) {
                res.sendError(logRole.roleNotFound, 404)
                return
            } 

            const permissionIdAlreadyExist = await permissionService.getPermissionById(relationship.PermissionId)

            if (permissionIdAlreadyExist == undefined) {
                res.sendError(logPermission.permissionNotFound, 404)
                return
            }

            await rolePermissionService.createRelationship(relationship)

            res.status(200).json({
                status: 200,
                success: true
            })
            
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async deleteRolePermission(req, res) {
        const id = req.params.relationshiptId

        try {
            let idExists = await rolePermissionService.getRelationshipById(id)

            if (!idExists) {
                res.sendError(logRolePermission.relationshipNotFound, 404)
            } else {
                await rolePermissionService.deleteRelationshipById(id)

                res.status(200).json({
                    status: 200,
                    success: true
                })
            }

        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    }
}

module.exports = rolePermissionsControllers