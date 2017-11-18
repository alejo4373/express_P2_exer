const express = require('express') //Framework for routing
const app = express()
const port = 8000;
const morgan = require('morgan') // Loger-Tracker
app.use(morgan('dev')) //Initialize Tracker

//Valid choices for both Ai and User so will be used
//if check that the user picked on of the right options
const validChoices = ["rock", "paper", "scissors"]

//             USER vs AI   //USER vs AI      //USER vs AI
const loss = ["rockpaper", "papperscissors", "scissorsrock"]
const storageObj = {} // {alejo:{ wins: 0, losses: 3, ties: 2} }}


const aiChooses = () => validChoices[Math.floor(Math.random() * 3)]

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

const createNewUser = (user) => {
    storageObj[user] = {
        wins: 0,
        losses: 0,
        ties: 0,
    }
}

const updateUserStats = (user, result) => {
    switch (result) {
        case "tie":
            storageObj[user].ties++;
            break;
        case "lose":
            storageObj[user].losses++;
            break;
        case "win":
            storageObj[user].wins++;
            break;
    }
}

//userName as an optinal parameter
app.get('/:userChoice/:userName?', (req, res) => {
    let userChoice = req.params.userChoice;
    let userName = req.params.userName;

    if (!validChoices.includes(userChoice)) {
        res.statusCode = 404;
        res.send("Please pick one of rock, paper or scissors")
    } else {
        let aiChoice = aiChooses();
        let result = playRPS(userChoice, aiChoice)
        let resultObj;
        if (userName) {
            if (!storageObj[userName]) {
                createNewUser(userName)
            }
            updateUserStats(userName, result)
            resultObj = {
                user: userChoice,
                ai: aiChoice,
                result: result,
                stats: storageObj[userName]
            }
        } else {
            resultObj = {
                user: userChoice,
                ai: aiChoice,
                result: result
            }
        }
        res.send(JSON.stringify(resultObj))
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
