const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Food = require('../models/Food');
const { errorHandler } = require('../helpers/dberrorHandler');


exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "La imagen no pudo ser cargada"
            })
        }

        const { name, status, quantity, description, photo, price, category, combos } = fields;
        let food = new Food(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            food.photo.data = fs.readFileSync(files.photo.path);
            food.photo.contentType = files.photo.type;
        }

        food.save((err, result) => {
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

    Food.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, foods)=>{
        if (err) {
            return res.status(400).json({
                error: "Alimento no encontrado"
            })
        }
        res.json(foods);
    })
}

exports.read = (req, res) => {
    req.food.photo = undefined;
    return res.json(req.food);
}


exports.remove = (req, res) => {
    let food = req.food
    food.remove((err, deletedFood) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "El alimento fue eliminado satisfactoriamente"
        })
    })
}

exports.foodById = (req, res, next, id) => {
    Food.findById(id)
    .populate("category")
    .exec((err, food) => {
        if (err || !food) {
            return res.json({
                error: "Alimento no encontrado o no existe"
            })
        }
        req.food = food;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.food.photo.data) {
        res.set('Content-Type', req.food.photo.contentType);
        return res.send(req.food.photo.data);
    }
    next();
}

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "La imagen no pudo ser cargada"
            })
        }

        const { name, status, quantity, description, photo, price, category, combos } = fields;
        let food = new Food(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            food.photo.data = fs.readFileSync(files.photo.path);
            food.photo.contentType = files.photo.type;
        }

        food.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result);
        })
    })
}