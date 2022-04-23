const config = require('@config')
const roleService = require('@services/role')
const {
    logUser,
    logPermission
} = require('@utils/constants')

const authGet = (requiredPermissionId) => {
    return async (req, res, next) => {
        userSession = req.session.userSession

        if (!userSession) {
            res.sendError(logUser.requiredLogged, 401)

        } else {
            const userRoleId = userSession.roleId
            const role = await roleService.getRoleById(userRoleId)

            let authorizedPermission = false

            for (let permission of role.permissions) {
                console.log(`Eu tenho a permission ${permission.dataValues.id} mas presciso da ${requiredPermissionId}`)
                if (permission.dataValues.id == requiredPermissionId) {
                    
                    authorizedPermission = true
                }
            }

            authorizedPermission ? next() : res.sendError(requiredPermissionId, 403)
        }
    }
}
module.exports = authGet