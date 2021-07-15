const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Smartphone = require('../models/Smartphone');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readsmartphone = (req, res) => {
    req.smartphone.photo = undefined;
    return res.json(req.smartphone);
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
        let smartphone = new Smartphone(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            smartphone.photo.data = fs.readFileSync(files.photo.path);
            smartphone.photo.contentType = files.photo.type;
        }

        smartphone.save((err, result) => {
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

    Smartphone.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, smartphones)=>{
        if (err) {
            return res.status(400).json({
                error: "Smartphone no encontrado"
            })
        }
        res.json(smartphones);
    })
}

exports.remove = (req, res) => {
    let smartphone = req.smartphone
    smartphone.remove((err, deletedSmartphone) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "El smartphone fue eliminado satisfactoriamente"
        })
    })
}


exports.smartphoneById = (req, res, next, id) => {
    Smartphone.findById(id)
    .populate("category")
    .exec((err, smartphone) => {
        if (err || !smartphone) {
            return res.json({
                error: "Smartphone no encontrado o no existe"
            })
        }
        req.smartphone = smartphone;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.smartphone.photo.data) {
        res.set('Content-Type', req.smartphone.photo.contentType);
        return res.send(req.smartphone.photo.data);
    }
    next();
}