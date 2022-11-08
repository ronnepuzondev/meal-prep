const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
    {
        ingredients: [],
    }
)

const mealSchema = new Schema(
    {
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        day: {
            type: String,
        },
        breakfast: {
            type: String
        },
        lunch: {
            type: String
        },
        dinner: {
            type: String
        },
        snack: {
            type: String
        },
        ingredients: [ingredientsSchema]
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Meal', mealSchema);