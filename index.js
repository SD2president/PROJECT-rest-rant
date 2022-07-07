//the .env file summon
require('dotenv').config()

//the express package 
const express = require('express')
const app = express()
let port = process.env.PORT

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404</h1>')
})


app.listen(process.env.PORT,() => {
    console.log(`its server of ${port} is up` )
})
