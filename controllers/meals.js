var Meal = require("../models/meal");
var User = require("../models/user")

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
  req.body.user = req.user._id;
  console.log(req.body)
  var meal = new Meal(req.body);
 
  meal.save(function (err) {
    if (err) return res.redirect(`/meals/new`);
    console.log(meal);
    console.log(meal.user);
    res.redirect(`/meals`);
  });
}
