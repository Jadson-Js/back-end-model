const permissionService = require('@services/permission')
const { logDefault, logPermission } = require('@utils/constants')

const permissionControllers = {
    async getPermissions(req, res) {
        try {
            const permissions = await permissionService.getPermissions()

            res.status(200).json({
                status: 200,
                data: permissions
            })
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async getPermissionById(req, res) {
        const id = req.params.permissionId

        try {
            const permission = await permissionService.getPermissionById(id)

            if (!permission) {
                res.sendError(logPermission.permissionNotFound, 404)
            } else {
                res.status(200).json({
                    status: 200,
                    data: permission
                })
            }
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }

    },

    async createPermission(req, res) {
        const permission = {
            title: req.body.title,
            description: req.body.description
        }

        try {
            const titleAlreadyExist = await permissionService.getPermissionByTitle(permission.title)

            if (titleAlreadyExist != undefined) {
                res.sendError(logDefault.titleAlreadyExist, 400)
            } else {
                await permissionService.createPermission(permission)

                res.status(200).json({
                    status: 200,
                    success: true
                })
            }
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async deletePermission(req, res) {
        const id = req.params.permissionId

        try {
            let idExists = await permissionService.getPermissionById(id)

            if (!idExists) {
                res.sendError(logPermission.permissionNotFound, 404)
            } else {
                await permissionService.deletePermissionById(id)

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

module.exports = permissionControllers