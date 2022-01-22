const express = require('express');
const router = express.Router();

const msgCtrl = require('../controllers/messages.controller');

router.post('/:id', msgCtrl.createMessage);
router.get('/:id', msgCtrl.getMessages);

module.exports = router