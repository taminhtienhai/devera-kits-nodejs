const express = require("express");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    let body = '';
    req.on('data', (chunk) => body += chunk);
    req.on('end', () => {
        req.body = JSON.parse(body);
        next();
    })
});

app.post("/", (req, res, next) => {
    res.json(req.body);
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});