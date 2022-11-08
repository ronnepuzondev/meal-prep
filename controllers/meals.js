var Meal = require("../models/meal");

module.exports = {
  index,
  show,
  new: newMeal,
  create,
};

function index(req, res) {
  Meal.find({}, function (err, meals) {
    res.render("meals/index", { title: "Calendar Week", meals });
  });
}

function show(req, res) {
  Meal.findById(req.params.id, function (err, meal) {
      res.render("meals/show", { title: "Ingredients", meal});
    });
  };


function newMeal(req, res) {
  res.render("meals/new", { title: "Add Day and Meal" });
}

function create(req, res) {
  var meal = new Meal (req.body);
  meal.save(function (err) {
    if (err) return res.redirect(`/meals/new`);
    console.log(meal);
    res.redirect(`/meals`);
  });
}
