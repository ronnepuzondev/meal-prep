const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ingredientsSchema = new Schema(
    {
        ingredients: {
            type: []
        }
    }
)

const mealSchema = new Schema(
    {
        dateOfMeal: {
            type: Date,
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
        ingredients: [ingredientsSchema],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Meal', mealSchema);