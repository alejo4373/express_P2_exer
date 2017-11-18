const express = require('express') //Framework for routing
const app = express()
const port = 8000;
const morgan = require('morgan') // Loger-Tracker

app.use(morgan('dev')) //Initialize Tracker

app.get('/', (req, res) => {
    res.send('Welcome to the calculator API!')
})

app.get('/page2', (req, res) => {
    res.send('Hello World! to Page2')
})

app.get('/users/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(port, () => {
    console.log (`Server running at http://localhost:${port}`)
})
