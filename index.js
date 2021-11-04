require('./config/config')
require('./config/mongoose')

const express = require('express')
const bodyParser = require('body-parser')

// Load routes
const boardGameRoutes = require('./routes/api/boardGameRoutes')


const app = express()

app.use(bodyParser.json())

// Use routes
app.use('/api/board-games', boardGameRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`[boardgm: server] Started on PORT ${PORT}`)
})