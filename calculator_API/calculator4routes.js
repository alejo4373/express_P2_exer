const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later
//Sample output {num1: 2, num2: 4, result: 6}

let num1;
let num2;

app.get('/add/:num1/:num2', (req, res) => {
    num1 = Number(req.params.num1)
    num2 = Number(req.params.num2)
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Invalid numbers")
    } else {
        res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 + num2}}`)
    }
})
app.get('/sub/:num1/:num2', (req, res) => {
    num1 = Number(req.params.num1)
    num2 = Number(req.params.num2)
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Invalid numbers")
    } else {
        res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 - num2}}`)
    }
})
app.get('/mul/:num1/:num2', (req, res) => {
    num1 = Number(req.params.num1)
    num2 = Number(req.params.num2)
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Invalid numbers")
    } else {
        res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 * num2}}`)
    }
})
app.get('/div/:num1/:num2', (req, res) => {
    num1 = Number(req.params.num1)
    num2 = Number(req.params.num2)
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Invalid numbers")
    } else {
        res.send(`{num1: ${num1}, num2: ${num2}, result: ${num1 / num2}}`)
    }
})

app.get('*', (req, res) => {
    res.send('Invalid Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


