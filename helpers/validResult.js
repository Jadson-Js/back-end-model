const {
    validationResult
} = require('express-validator');

function validResult (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.sendError({ errors: errors.array() }, 400);
    }

    next()
}

module.exports = validResult