const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookSchema = new mongoose.Schema(
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
            maxlength: 2000,
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        price: {
            type: Number,
            trim: true,
            require: true,
            maxlength: 50,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            require: true,
        },
        author: {
            type: String,
            trim: true,
            require: true,
            maxlength: 50,
        },
        pages: {
            type: Number,
            trim: true,
            require: true,
            maxlength: 30,
        },
        category_book: {
            type: String,
            trim: true,
            require: true,
            maxlength: 50,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Book", bookSchema);