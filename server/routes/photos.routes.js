const express = require('express');
const router = express.Router();

const photoCtrl = require('../controllers/photos.controller')

router.get('/', photoCtrl.portfolio);
router.post('/:id', photoCtrl.createPhoto);
router.get('/:id', photoCtrl.getPhoto);// ??
// router.get('/portfolios', photoCtrl.portfolio); //??


module.exports = router;