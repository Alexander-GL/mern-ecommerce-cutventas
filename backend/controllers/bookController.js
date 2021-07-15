const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Book = require('../models/Book');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readbook = (req, res) => {
    req.book.photo = undefined;
    return res.json(req.book);
}

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "La imagen no pudo ser cargada"
            })
        }

        const { name, status, quantity, description, photo, price, category, author, pages, category_book } = fields;
        let book = new Book(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            book.photo.data = fs.readFileSync(files.photo.path);
            book.photo.contentType = files.photo.type;
        }

        book.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result);
        })
    })
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.order ? req.query.sortBy : 'name'

    Book.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, books)=>{
        if (err) {
            return res.status(400).json({
                error: "Libro no encontrado"
            })
        }
        res.json(books);
    })
}

exports.remove = (req, res) => {
    let book = req.book
    book.remove((err, deletedBook) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "El libro fue eliminado satisfactoriamente"
        })
    })
}


exports.bookById = (req, res, next, id) => {
    Book.findById(id)
    .populate("category")
    .exec((err, book) => {
        if (err || !book) {
            return res.json({
                error: "Libro no encontrado o no existe"
            })
        }
        req.book = book;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.book.photo.data) {
        res.set('Content-Type', req.book.photo.contentType);
        return res.send(req.book.photo.data);
    }
    next();
}