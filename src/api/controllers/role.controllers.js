const roleService = require('@services/role')
const { logDefault, logRole } = require('@utils/constants')

const roleControllers = {
    async getRoles(req, res) {
        try {
            const roles = await roleService.getRoles()

            res.status(200).json({
                status: 200,
                data: roles
            })
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async getRoleById(req, res) {
        const id = req.params.roleId

        try {
            const role = await roleService.getRoleById(id)

            if (!role) {
                res.sendError(logRole.roleNotFound, 404)
            } else {
                res.status(200).json({
                    status: 200,
                    data: role
                })
            }
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async createRole(req, res) {
        const role = {
            title: req.body.title,
            description: req.body.description
        }

        try {
            const titleAlreadyExist = await roleService.getRoleByTitle(role.title)

            if (titleAlreadyExist != undefined) {
                res.sendError(logDefault.titleAlreadyExist, 400)
            } else {
                await roleService.createRole(role)

                res.status(200).json({
                    status: 200,
                    success: true
                })
            }
        } catch (err) {
            res.sendError(logDefault.somethingGoesWrong, 500)
        }
    },

    async deleteRole(req, res) {
        const id = req.params.roleId

        try {
            let idExists = await roleService.getRoleById(id)

            if (!idExists) {
                res.sendError(logRole.roleNotFound, 404)
            } else {
                await roleService.deleteRoleById(id)

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

module.exports = roleControllers