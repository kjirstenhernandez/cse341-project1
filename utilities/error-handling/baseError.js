class BaseError extends Error {
    constructor (name, statusCode, isOperational, description) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperation = isOperational;
    }
}

module.exports = BaseError