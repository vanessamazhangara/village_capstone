const express = require('express');
const router = express.Router();

const msgCtrl = require('../controllers/messages.controller');

router.post('/:photographerId', msgCtrl.createMessage);
router.get('/:photographerId', msgCtrl.getMessages);
router.delete('/:messageId', msgCtrl.deleteMessage);

module.exports = router