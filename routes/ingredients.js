var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients')


router.post('/meals/:id/ingredients', ingredientsCtrl.create);
router.delete("/meals/:id/ingredients", ingredientsCtrl.delete);
router.get('/meals/:id/ingredients', ingredientsCtrl.edit);
router.put('/meals/:id/ingredients', ingredientsCtrl.update);

module.exports = router;

