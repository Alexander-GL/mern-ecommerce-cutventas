const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const FashionWoman = require('../models/FashionWoman');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readfashionwoman = (req, res) => {
    req.fashionWoman.photo = undefined;
    return res.json(req.fashionWoman);
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

        const { name, status, quantity, description, photo, price, category, gender, color, type, size } = fields;
        let fashionWoman = new FashionWoman(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            fashionWoman.photo.data = fs.readFileSync(files.photo.path);
            fashionWoman.photo.contentType = files.photo.type;
        }

        fashionWoman.save((err, result) => {
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

    FashionWoman.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, fashionWomans)=>{
        if (err) {
            return res.status(400).json({
                error: "Prenda no encontrada"
            })
        }
        res.json(fashionWomans);
    })
}

exports.remove = (req, res) => {
    let fashionWoman = req.fashionWoman
    fashionWoman.remove((err, deletedFashionWoman) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "La prenda fue eliminada satisfactoriamente"
        })
    })
}

exports.fashionWomanById = (req, res, next, id) => {
    FashionWoman.findById(id)
    .populate("category")
    .exec((err, fashionWoman) => {
        if (err || !fashionWoman) {
            return res.json({
                error: "Prenda no encontrada o no existe"
            })
        }
        req.fashionWoman = fashionWoman;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.fashionWoman.photo.data) {
        res.set('Content-Type', req.fashionWoman.photo.contentType);
        return res.send(req.fashionWoman.photo.data);
    }
    next();
}