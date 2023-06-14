const express = require("express");

const userRoute = require("./routes/user.js");
const playerRoute = require("./routes/monster.js");
const monsterRoute = require("./routes/player.js");


const app = express();
const PORT = 3000;

 
app.use(express.json());


app.use(playerRoute);
app.use(monsterRoute);

const { players, monsters } = require("./database");

app.put('/attack', (req, res) => {
    const { player, monster } = req.body;

    const pIndex = players.findIndex(p => p.name === player);
    const mIndex = monsters.findIndex(m => m.name === monster);

    const p = players[pIndex];
    const m = monsters[mIndex];

    p.health = p.health - m.attack;
    m.health = m.health - p.attack;

    if (m.health <= 0) {
        m.health = 0;
        m.status = 'death';
    }

    if (p.health <= 0) {
        p.health = 0;
        p.status = 'death';
    }

    // Update lại mảng
    players[pIndex] = p;
    monsters[mIndex] = m;

    
    res.json({
        player: p,
        monster: m,
    });
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});