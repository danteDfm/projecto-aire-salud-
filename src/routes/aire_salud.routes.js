const {Router} = require('express');
const router = Router();

const {aire_salud} = require('../controllers/aire_salud.controller');

router.get('/', aire_salud );

module.exports = router;