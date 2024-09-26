const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument)); //http://<app_host>:<app_port>/api-docs

router.get('/', (req, res) => { res.send("hello world!");});
router.use('/users', require('./users'));

module.exports = router;