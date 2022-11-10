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
  Meal.findOne({'ingredients._id': req.params.id},
  function(err, meal) {
    if (!meal || err) return res.redirect('/meals/&{meal._id}')
    meal.ingredients.remove(req.params.id);
    meal.save(function(err) {
      res.redirect(`/meals/${meal._id}`)
    })
  })
}
  