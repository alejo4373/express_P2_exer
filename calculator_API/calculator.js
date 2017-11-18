const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later
let validOperators = ["add", "sub", "mul", "div"]
//Sample output {num1: 2, num2: 4, result: 6}

app.get('/:operator/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let operator = req.params.operator;

    if (isNaN(num1) || isNaN(num2)) {
        res.send("Invalid numbers")
    }

    if (validOperators.includes(operator)) {
        let operatorsObj = {
            add: (num1, num2) => num1 + num2,
            sub: (num1, num2) => num1 - num2,
            mul: (num1, num2) => num1 * num2,
            div: (num1, num2) => num1 / num2,
        }
        let resultObj = {
            num1: num1,
            num2: num2,
            result: operatorsObj[operator](num1, num2)
        }
        res.send(JSON.stringify(resultObj))

    } else {
        res.send("Invalid Operator")
    }
})

app.get('*', (req, res) => {
    res.status(404)
    res.send('Invalid Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


