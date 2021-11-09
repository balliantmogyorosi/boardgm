require('./config/config')
require('./config/mongoose')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Load routes
const boardGameRoutes = require('./routes/api/boardGameRoutes')
const boardGameInteractionRoutes = require('./routes/api/boardGameInteractionRoutes')


const app = express()

app.use(bodyParser.json())

// Use routes
app.use('/api/board-games', boardGameRoutes)
app.use('/api/board-game-interactions', boardGameInteractionRoutes)


// Configure statis 'assets' folder
app.use('/assets/rules', express.static(path.join(__dirname, 'assets', 'rules')))
app.use('/assets/images', express.static(path.join(__dirname, 'assets', 'images')))

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