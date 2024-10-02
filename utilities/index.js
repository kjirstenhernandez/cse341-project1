const util = {};


// Middleware for General Error Handling
// =====================================

util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)



module.exports = util