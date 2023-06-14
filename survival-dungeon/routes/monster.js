const express = require("express");

const route = express.Router();

const { monsters } = require("../database");
const uniqueMiddleware = require("../validator/uniqueMiddleware");

route.get("/monsters", (req, res) => res.json(monsters));

route.post("/monster", uniqueMiddleware(monsters), (req, res) => {
    const { name, attack, health } = req.body;
    monsters.push({
        name,
        attack,
        health,
        status: health > 0 ? 'alive' : 'death',
    });

    res.json(monsters);
});

route.get("/monster/:name", (req, res, next) => {
    const { name } = req.params;

    /// Cách 1
    // for (const monster of monsters) {
    //     if (monster.name === name) {
    //         return res.json(monster);
    //     }
    // }
    // next(`Monster with name: ${name} does not exist`);



    /// Cách 2
    const monster = monsters.find(m => m.name === name);

    console.log(monster);

    if (!monster) { return next(`Monster with name: ${name} does not exist`); }

    res.json(monster);
});

route.delete("/monster/:name", (req, res, next) => {
    const { name } = req.params;

    const position = monsters.findIndex(m => m.name === name);

    if (position < 0) { return res.json(monsters); }

    monsters.splice(position, 1);

    res.json(monsters);
})

module.exports = route;