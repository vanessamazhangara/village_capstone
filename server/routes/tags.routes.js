const express = require('express');
const router = express.Router();

const tagCtrl = require('../controllers/tags.controller');

router.get('/', tagCtrl.getTags);

module.exports = router;