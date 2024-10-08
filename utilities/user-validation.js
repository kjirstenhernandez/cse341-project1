const { body, validationResult } = require("express-validator");
const validate = {};
const ApiError = require('./error-handling/apiErrors');

// ================================
// User Creation Rules
// ================================

validate.createUserRules = () => {
    return [
        body('firstName')
            .trim() //remove accidental whitespace
            .isLength({min: 1})
            .withMessage('Please provide a first name.'),
        
        body('lastName')
            .trim()
            .isLength({min: 1})
            .withMessage('Please provide a last name.'),
        
        body('email')
            .trim()
            .isEmail()
            .withMessage('A valid email is required'),
        
        body('favoriteColor')
            .trim()
            .isLength({min: 1})
            .withMessage('Please provide a favorite color'),

        body('birthday')
            .trim()
            .isLength({min: 8})
            .withMessage('Please provide full birthday')
    ]
}
// Return errors if any; Otherwise process request
// ================================

validate.checkUserData = async (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        if (!result.isEmpty()) {
            valList = [];
            result.array().forEach(error => {
                valList.push(error.msg);
            });
            res.status(400).send(valList.join('; '));
            throw new ApiError.Api400Error(`Validation Error(s): ${valList.join('; ')}`) // error for dev log
        // return res.status(400).send({errors: result.array()}); -- Original error code
        }
    }

    next()
}



module.exports = validate