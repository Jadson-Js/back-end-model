const jwt = require('jsonwebtoken')
const config = require('@config')
const { logUser } = require('@utils/constants')

function verifyJwt(req, res, next) {
    const token = req.headers['authorization']

    if (token == undefined) {
        res.sendError(constants.tokenNotProvide, 400)
        return
    } 

    jwt.verify(token, config.jwt.secret, (err, data) => {
        if (err) {
            res.sendError(logUser.tokenUnauthentic, 401)
        } else {
            next()
        }
    })



}

module.exports = verifyJwt