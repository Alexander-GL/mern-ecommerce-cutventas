const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const fitSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            require: true,
            maxlength: 50,
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
            maxlength: 1000,
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
        gender: {
            type: String,
            trim: true,
            require: true,
            maxlength: 20,
        },
        color: {
            type: String,
            trim: true,
            require: true,
            maxlength: 20,
        },
        type: {
            type: String,
            trim: true,
            require: true,
            maxlength: 50,
        },
        size: {
            type: String,
            trim: true,
            require: true,
            maxlength: 40,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Fit", fitSchema);