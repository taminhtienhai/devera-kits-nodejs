const express = require("express");

const route = express.Router();

const users = [];

function validation(req, res, next) {
    const { username, password } = req.body;

    if (!username || username.length > 20) {
        next("Missing or username exceed 20 characters");
    }

    if (!password || password.length > 8) {
        next("Missing or password exceed 8 characters");
    }

    next();
}

function errorHandler(error, req, res, next) {
    res.status(501).json({ error });
}

route.get('/all', validation, (req, res, next) => {
    res.json(users);
});

route.post('/', validation, (req, res, next) => {
    users.push(req.body);
    res.send("Add user sucess");
});

route.use(errorHandler);

module.exports = route;