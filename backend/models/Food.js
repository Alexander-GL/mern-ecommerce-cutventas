const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            require: true,
            maxlength: 30,
        },
        status: {
            type: String,
            trim: true,
            require: true,
            maxlength: 32,
        },
        quantity: {
            type: Number,
        },
        description: {
            type: String,
            trim: true,
            require: true,
            maxlength: 200,
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        price: {
            type: Number,
            trim: true,
            require: true,
            maxlength: 32,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            require: true,
        },
        combos: {
            type: String,
            trim: true,
            require: true,
            maxlength: 50,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Food", foodSchema);