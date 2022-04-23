const userService = require('@services/user')
const loginService = require('@services/login')
const constants = require('@utils/constants')

const loginControllers = {
    helloWorld(req, res) {
        res.send('Hello world, bitch!')
    },

    async getSession(req, res) {
        res.status(200).json({
            status: 200,
            data: req.session
        })
    },

    async loginUser(req, res) {
        const findUser = {
            name: req.body.name,
            password: req.body.password
        }

        try {
            let userFound = await userService.getUserByName(findUser.name)
            if (!userFound) {
                res.sendError(constants.userNotFound, 404)
                return
            }

            const validUser = await loginService.verifyPassword(findUser.password, userFound.password)

            if (!validUser) {
                res.sendError(constants.invalidCredentials, 403)
            } else {
                const token = await loginService.createToken(userFound.id, userFound.name);

                req.session.userSession = {
                    id: userFound.id, 
                    name: userFound.name,
                    password: userFound.password, 
                    roleId: userFound.roleId,
                }

                res.status(200).json({
                    status: 200,
                    auth: true,
                    token: token
                })
            }

        } catch (err) {
            res.sendError(constants.somethingGoesWrong, 500)
        }
    }
}

module.exports = loginControllers