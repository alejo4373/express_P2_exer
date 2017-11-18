const express = require('express')
const app = express()
const port = 8000;
const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World!')
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
