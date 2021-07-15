const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const FashionMen = require('../models/FashionMen');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readfashionmen = (req, res) => {
    req.fashionMen.photo = undefined;
    return res.json(req.fashionMen);
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
        let fashionMen = new FashionMen(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            fashionMen.photo.data = fs.readFileSync(files.photo.path);
            fashionMen.photo.contentType = files.photo.type;
        }

        fashionMen.save((err, result) => {
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

    FashionMen.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, fashionMens)=>{
        if (err) {
            return res.status(400).json({
                error: "Prenda no encontrada"
            })
        }
        res.json(fashionMens);
    })
}

exports.remove = (req, res) => {
    let fashionMen = req.fashionMen
    fashionMen.remove((err, deletedFashionMen) => {
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

exports.fashionMenById = (req, res, next, id) => {
    FashionMen.findById(id)
    .populate("category")
    .exec((err, fashionMen) => {
        if (err || !fashionMen) {
            return res.json({
                error: "Prenda no encontrada o no existe"
            })
        }
        req.fashionMen = fashionMen;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.fashionMen.photo.data) {
        res.set('Content-Type', req.fashionMen.photo.contentType);
        return res.send(req.fashionMen.photo.data);
    }
    next();
}