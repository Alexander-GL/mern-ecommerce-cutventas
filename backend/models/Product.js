const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            ref: "Food",
            require: true,
        },
        status: {
            type: String,
            ref: "Food",
            require: true,
        },
        quantity: {
            type: Number,
            ref: "Food",
            require: true,
        },
        description: {
            type: String,
            ref: "Food",
            require: true,
        },
        price: {
            type: Number,
            ref: "Food",
            require: true,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            require: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);