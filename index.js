require('./config/config')
require('./config/mongoose')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Load routes
const boardGameRoutes = require('./routes/api/boardGameRoutes')


const app = express()

app.use(bodyParser.json())

// Use routes
app.use('/api/board-games', boardGameRoutes)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`[boardgm: server] Started on PORT ${PORT}`)
})