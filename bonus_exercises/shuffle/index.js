const express = require('express')                  // Import express
const serveStatic = require('serve-static')         // To serve files from the server
const generateHtml = require('./generateHtml')      // Module made by me with helper function
const app = express()                               // Create an express server
const port = 8000;

const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

const pickRandomCard = () => {
    return {
        suit: suits[Math.floor(Math.random() * 4)],
        rank: ranks[Math.floor(Math.random() * 13)]
    }
}

const drawCards = (num) => {
    // Simple representation of the cards
    let drawn = []; //['clubsace', 'diamonsds2']...
    // Object representation of the cards
    let hand = [];
    while (num > 0) {
        let card = pickRandomCard()
        if (!drawn.includes(card.rank + card.suit)) {
            hand.push(card)
            drawn.push(card.rank + card.suit)
        } else {
            num++ //To try again
        }
        num--;
    }
    console.log(drawn)
    return drawn;
}

app.use(serveStatic('./'))

app.get('/draw/:numOfCards', (req, res) => {
    if (req.params.numOfCards <= 10) {
        let handDrawn = drawCards(req.params.numOfCards)
        res.send(generateHtml.generateImgsDiv(handDrawn))
    } else {
        res.status('404')
        res.send("<h1>Cannot draw more that 10 cards</h1>")
    }
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

