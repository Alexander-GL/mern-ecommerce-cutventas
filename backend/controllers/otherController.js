const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Other = require('../models/Other');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readother = (req, res) => {
    req.other.photo = undefined;
    return res.json(req.other);
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

        const { name, status, quantity, description, photo, price, category, type, color } = fields;
        let other = new Other(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            other.photo.data = fs.readFileSync(files.photo.path);
            other.photo.contentType = files.photo.type;
        }

        other.save((err, result) => {
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

    Other.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, others)=>{
        if (err) {
            return res.status(400).json({
                error: "Elemento no encontrado"
            })
        }
        res.json(others);
    })
}

exports.remove = (req, res) => {
    let other = req.other
    other.remove((err, deletedOther) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "El elemento fue eliminado satisfactoriamente"
        })
    })
}


exports.otherById = (req, res, next, id) => {
    Other.findById(id)
    .populate("category")
    .exec((err, other) => {
        if (err || !other) {
            return res.json({
                error: "Elemento no encontrado o no existe"
            })
        }
        req.other = other;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.other.photo.data) {
        res.set('Content-Type', req.other.photo.contentType);
        return res.send(req.other.photo.data);
    }
    next();
}