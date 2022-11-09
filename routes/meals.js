var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals');


router.get('/', mealsCtrl.index);
router.get('/new', mealsCtrl.new);
router.get('/:id', mealsCtrl.show);
router.get('/:id/edit', mealsCtrl.edit);
router.post('/', mealsCtrl.create);
router.delete("/:id", mealsCtrl.delete);
router.put('/:id', mealsCtrl.update);

module.exports = router;