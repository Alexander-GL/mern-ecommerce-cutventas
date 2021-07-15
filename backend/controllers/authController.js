const User = require('../models/User');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// Sign up
exports.signup = (req, res) => {
    console.log('req.body', req.body);      // BODY = {"name": "Alexander García", "email": "test@test.com", "password": "test1234"}
    const user = new User(req.body);        // Nueva constante asignada a un nuevo objeto y la guardamos con save
    user.save((error, user) => {
        console.log("Enpoint de registro alcanzado")
        if (error) {
            return res.status(400).json({
                message: "Por favor revise los campos, tiene un Error"
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    })
}

// Login
exports.signin = (req, res) => {
    const {email, password} = req.body
    User.findOne({email}, (error, user) => {        // Encontrara el usuario con base al email
        if (error||!user) {
            return res.status(400).json({
                error: 'Usuario con este Email no existe...'
            });
        }

        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'La contraseña y/o el Email no coinciden, intentalo de nuevo...'
            });
        }
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET) // Sino hay ningun error nos va a crear un token (session con un cookie)
        res.cookie('t', token, {expire: new Date() + 9999})
        const {_id, name, email, role} = user
        return res.json({token, user: {_id, email, name, role}})
    });
}

// Sign Out
exports.signout = (req, res) => {
    res.clearCookie('t')
    res.json({message: "Esperamos verte de nuevo"});
};

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err||!user) {
            return res.status(400).json({
                error: "Ususario no encontrado"
            });
        }
        req.profile = user;
        next()
    });
}