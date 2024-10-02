const httpStatusCodes = require('./httpStatusCodes');
const BaseError = require('./baseError');


class Api400Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = 'Bad Request',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

class Api404Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = 'Not Found.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

class Api500Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER,
        description = 'Server Error',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

module.exports = { Api500Error, Api404Error, Api400Error}