var Meal = require("../models/meal");


module.exports = {
  index,
  show,
  new: newMeal,
  create,
  delete: deleteMeal,
  edit,
  update,
};


function index(req, res) {
  Meal.find({user: req.user._id}, function (err, meals) {
    res.render("meals/index", { title: "Meal Calendar", meals });
  });
}

function show(req, res) {
  Meal.findById(req.params.id, function (err, meal) {
      res.render("meals/show", { title: "Ingredients", meal});
    });
  };


function newMeal(req, res) {
  Meal.find({user: req.user._id}, function (err, meals) {
  res.render("meals/new", { title: "Add Meals", meals });
});
}


function deleteMeal(req, res) {
  Meal.findOneAndDelete(
    {_id: req.params.id, user: req.user._id}, function(err) {
      res.redirect('/meals');
    }
  );
}


function edit(req, res) {
  Meal.findOne({_id: req.params.id, user: req.user._id}, function(err, meal) {
    if (err || !meal) return res.redirect('/meals');
    res.render('meals/edit', { meal, title: "Edit Meal" });
  });
}

function update(req, res) {
  Meal.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, meal) {
      if (err || !meal) return res.redirect('/meals');
      res.redirect(`/meals/`);
    }
  );
}


function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.body);
  var meal = new Meal(req.body);
  meal.save(function (err) {
    if (err) return res.redirect(`/meals/new`);
    console.log(meal);
    console.log(meal.user);
    res.redirect(`/meals/${meal._id}`);
  });
}

