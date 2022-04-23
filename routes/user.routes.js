const router = require('express').Router()
const { check } = require('express-validator');

const verifyJwt = require('@middlewares/verifyJwt')

const validResult = require('@helpers/validResult')
const userControllers = require('@controllers/user')
const {  logDefault, logRole } = require('@utils/constants')

router.get('/users',
    userControllers.getUsers
)

router.get('/user/:userId',
    verifyJwt,
    check('userId').isNumeric().withMessage(logDefault.invalidId),
    validResult,
    userControllers.getUserById
)

router.post('/user',
    check('name').isLength({ min: 1, max: 32 }).isString().withMessage(logDefault.invalidName),
    check('password').isLength({ min: 8, max: 160 }).withMessage(logDefault.invalidPassword),
    check('RoleId').isEmpty().withMessage(logRole.notAllowedSetRole),
    validResult,
    userControllers.createUser
)

router.put('/user/:userId',
    check('userId').isNumeric().withMessage(logDefault.invalidId),
    check('newRoleId').isNumeric().withMessage(logDefault.invalidId),
    validResult,
    userControllers.updateUserRole
)

router.delete('/user/:userId',
    check('userId').isNumeric().withMessage(logDefault.invalidId),
    validResult,
    userControllers.deleteUser
)

module.exports = router