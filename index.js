//the .env file summon
require('dotenv').config()

//the express package 
const express = require('express')
const app = express()
let port = process.env.PORT

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT,() => {
    console.log(`its server of ${port} is up` )
})
