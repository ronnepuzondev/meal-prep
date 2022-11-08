var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals');


router.get('/', mealsCtrl.index);
router.get('/new', mealsCtrl.new);
router.get('/:id', mealsCtrl.show);
router.post('/', mealsCtrl.create);
router.delete("/:id", mealsCtrl.delete); 

module.exports = router;