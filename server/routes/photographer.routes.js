const express = require('express');
const router = express.Router();

const photogCtrl = require('../controllers/photographer.controller');

router.get('/', photogCtrl.getAll);

module.exports = router