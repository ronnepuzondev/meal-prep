var Meal = require('../models/meal');


module.exports = {
  create,
  delete: deleteIngredient,
};

function create(req, res) {
  Meal.findById(req.params.id, function(err, meal) {
    meal.ingredients.push(req.body);
    meal.save(function(err) {
      res.redirect(`/meals/${meal._id}`);
    });
  });
}

function deleteIngredient(req, res) {
  Meal.findById(req.params.id, function(err, meal) {
    Meal.ingredients.findOneAndDelete(
      // Ensue that the book was created by the logged in user
      {_id: req.params.id, user: req.user._id}, function(err) {
        res.redirect('/meals/${meal._id}');
      })
  })
  
}
