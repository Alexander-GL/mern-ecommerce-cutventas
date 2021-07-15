const Product = require('../models/Product');
const { errorHandler } = require('../helpers/dberrorHandler');

// Metodos
exports.create = (req, res) => {
    const product = new Product(req.body)
    product.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}


exports.list = (req, res) => {
    Product.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.remove = (req, res) => {
    let product = req.product
    product.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Producto eliminado"
        })
    })
}

exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                error: "Producto no encontrado o no existe"
            })
        }
        req.product = product;
        next(); // Continua con todo el proceso que se estaba haciendo.
    })
}