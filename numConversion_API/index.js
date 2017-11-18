const express = require('express') // import express
const app = express() // Create an express server
const port = 8000; 
const validRadixes = ['bin', 'dec', 'hex']

const converter = {
    bin: (num) => {
        return {
            bin: num,
            dec: parseInt(num, 2),
            hex: parseInt(num,2).toString(16)
        }
    },
    dec: (num) => {
        return {
            bin: Number(num).toString(2),
            dec: Number(num),
            hex: Number(num).toString(16)
        }
    },
    hex: (num) => {
        return {
            bin: parseInt(num,16).toString(2),
            bec: parseInt(num, 16),
            hex: num
        }
    } 
}

//localhost:8000/{number}/{bin|dec|hex}
//  {
//      "original": { "value":"10", "base":10 },
//      "conversions": { "decimal":"10", "binary":"1010", "hex":"a" }
//  }

// parseInt converts to decimal from whatever base
// but doesnt do the oposite

// Function             =>  DEC
// parseInt("a", 16)    =>  10
// parseInt("1111", 2)  =>  15
// parseInt("10", 10)   =>  10

app.get('/:num/:radix?', (req, res) => {
    let num = req.params.num;
    let radix = req.params.radix;
    
    //If invalid radix default to dec
    if(!validRadixes.includes(radix)) radix = "dec"

    let resultObj = {
        original: { value: num, base: radix },
        conversions: converter[radix](num) 
    }
    //Check if we had a succesful conversion
    if (isNaN(resultObj.conversions.dec)) {
        res.send("Not posible to make the conversion")
    } else {
        res.send(JSON.stringify(resultObj))
    }

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
