const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Fit = require('../models/Fit');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readfitnes = (req, res) => {
    req.fit.photo = undefined;
    return res.json(req.fit);
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
        let fit = new Fit(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            fit.photo.data = fs.readFileSync(files.photo.path);
            fit.photo.contentType = files.photo.type;
        }

        fit.save((err, result) => {
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

    Fit.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, fitness)=>{
        if (err) {
            return res.status(400).json({
                error: "Prenda no encontrada"
            })
        }
        res.json(fitness);
    })
}

exports.remove = (req, res) => {
    let fit = req.fit
    fit.remove((err, deletedFit) => {
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

exports.fitById = (req, res, next, id) => {
    Fit.findById(id)
    .populate("category")
    .exec((err, fit) => {
        if (err || !fit) {
            return res.json({
                error: "Prenda no encontrada o no existe"
            })
        }
        req.fit = fit;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.fit.photo.data) {
        res.set('Content-Type', req.fit.photo.contentType);
        return res.send(req.fit.photo.data);
    }
    next();
}