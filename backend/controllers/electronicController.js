const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Electronic = require('../models/Electronic');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readelectronic = (req, res) => {
    req.electronic.photo = undefined;
    return res.json(req.electronic);
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

        const { name, status, quantity, description, photo, price, category, volts } = fields;
        let electronic = new Electronic(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            electronic.photo.data = fs.readFileSync(files.photo.path);
            electronic.photo.contentType = files.photo.type;
        }

        electronic.save((err, result) => {
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

    Electronic.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, electronics)=>{
        if (err) {
            return res.status(400).json({
                error: "Electronico no encontrado"
            })
        }
        res.json(electronics);
    })
}

exports.remove = (req, res) => {
    let electronic = req.electronic
    electronic.remove((err, deletedElectronic) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "El electronico fue eliminado satisfactoriamente"
        })
    })
}


exports.electronicById = (req, res, next, id) => {
    Electronic.findById(id)
    .populate("category")
    .exec((err, electronic) => {
        if (err || !electronic) {
            return res.json({
                error: "Electronico no encontrado o no existe"
            })
        }
        req.electronic = electronic;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.electronic.photo.data) {
        res.set('Content-Type', req.electronic.photo.contentType);
        return res.send(req.electronic.photo.data);
    }
    next();
}