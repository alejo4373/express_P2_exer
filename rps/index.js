const express = require('express') //Framework for routing
const app = express()
const port = 8000;
const morgan = require('morgan') // Loger-Tracker
app.use(morgan('dev')) //Initialize Tracker

const aiChoices = ["rock", "paper", "scissors"]
//             USER vs AI   //USER vs AI      //USER vs AI
const loss = ["rockpaper", "papperscissors", "scissorsrock"]

const aiChooses = () => aiChoices[Math.floor(Math.random() * 3)]

const playRPS = (userChoice, aiChoice) => {
    userVsAi = userChoice + aiChoice;
    if (userChoice === aiChoice) {
        return "tie"
    } else {
        if (!loss.includes(userVsAi)) {
            return "win"
        } else {
            return "lose"
        }
    }
}

app.get('/:userChoice', (req, res) => {
    let aiChoice = aiChooses();
    let result = playRPS(req.params.userChoice, aiChoice)
    let resultObj = {
        user: req.params.userChoice,
        ai: aiChoice,
        result: result
    }
    res.send(JSON.stringify(resultObj))
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
