var Meal = require('../models/meal');

module.exports = {
  create
};

function create(req, res) {
  Meal.findById(req.params.id, function(err, meal) {
    meal.ingredients.push(req.body);
    meal.save(function(err) {
      res.redirect(`/meals/${meal._id}`);
    });
  });
}