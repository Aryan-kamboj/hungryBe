
const express = require('express');
const router = express.Router();
const { vegitarianDishes, nonVegitarianDishes,fetchAllDishes} = require('../controllers/foodItem');
router.get('/all',fetchAllDishes);
router.get('/veg',vegitarianDishes);
router.get('/nonveg',nonVegitarianDishes);
module.exports = router;