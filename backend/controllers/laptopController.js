const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs'); //   File System

const Laptop = require('../models/Laptop');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.readlaptop = (req, res) => {
    req.laptop.photo = undefined;
    return res.json(req.laptop);
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
        let laptop = new Laptop(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe ser menor a 1MB de tamaño"
                })
            }
            laptop.photo.data = fs.readFileSync(files.photo.path);
            laptop.photo.contentType = files.photo.type;
        }

        laptop.save((err, result) => {
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

    Laptop.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, laptops)=>{
        if (err) {
            return res.status(400).json({
                error: "Laptop no encontrada"
            })
        }
        res.json(laptops);
    })
}

exports.remove = (req, res) => {
    let laptop = req.laptop
    laptop.remove((err, deletedLaptop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "La laptop fue eliminada satisfactoriamente"
        })
    })
}


exports.laptopById = (req, res, next, id) => {
    Laptop.findById(id)
    .populate("category")
    .exec((err, laptop) => {
        if (err || !laptop) {
            return res.json({
                error: "Laptop no encontrada o no existe"
            })
        }
        req.laptop = laptop;
        next();
    })
}

exports.photo = (req, res, next) => {
    if (req.laptop.photo.data) {
        res.set('Content-Type', req.laptop.photo.contentType);
        return res.send(req.laptop.photo.data);
    }
    next();
}