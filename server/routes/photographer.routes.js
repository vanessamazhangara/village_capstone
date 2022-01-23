const express = require('express');
const router = express.Router();

const photogCtrl = require('../controllers/photographer.controller');

router.get('/', photogCtrl.getAll);
router.get('/:id', photogCtrl.getPhotographer); 
router.post('/login', photogCtrl.login);
router.put('/:id', photogCtrl.updatePhotographer);
router.post('/register', photogCtrl.createPhotographer);


module.exports = router