const express = require("express");
const route = express.Router();

const { players } = require("../database");
const uniqueMiddleware = require("../validator/uniqueMiddleware");


route.get("/players", (req, res) => res.json(players));
// route.get("/player/:name")
route.post("/player", uniqueMiddleware(players), (req, res) => {
    const { name, attack, health } = req.body;
    players.push({
        name,
        attack,
        health,
        status: health > 0 ? 'alive' : 'death',
    });

    res.json(players);
})
// route.delete("/player")

module.exports = route;