const express = require('express');
const router = express.Router();

const reviewCtrl = require('../controllers/review.controller')

router.post('/:id', reviewCtrl.createReview);
router.get('/:id', reviewCtrl.getReviews);

module.exports = router