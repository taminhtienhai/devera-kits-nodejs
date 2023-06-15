
const LIMIT = 1_000_000;
const arr = Array.from({ length: LIMIT });

/// init




/// old-school for-loop
console.log("----- Old School for-loop ------")
const start1 = performance.now();

for (let i = 1; i <= LIMIT; i++) {
}

console.log(performance.now() - start1);

//// for-loop (of)
console.log("----- for-loop (of) ------")

const start2 = performance.now();

for (const it of arr) {}

console.log(performance.now() - start2);

/// for-loop (in)
console.log("----- for-loop (in) ------")
const start3 = performance.now();

for (const it in arr) {}

console.log(performance.now() - start3);

/// for-each 

console.log("----- for-each ------")

const start4 = performance.now();

arr.forEach(() => {});

console.log(performance.now() - start4);

// const express = require("express");
// const app = express();


// app.use(express.json());

// app.post('/generate', (req, res) => {
//     const start = performance.now();

//     const { size } = req.body;

//     const arr = Array.from({ length: size }, (_,i) => ++i);

//     const end = performance.now() - start;

//     res.json({
//         array: arr,
//         runtime: end,
//     });
// })


// app.listen(3000);