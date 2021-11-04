const { Router } = require('express')

const BoardGame = require('../../models/BoardGame')


const router = Router()

router.get('/', async (req, res) => {
    console.log('[boardgm: server] /api/board-games')
    try {
        let { genres } = req.query
        let filters = {}
        if (genres) {
            filters = {
                ...filters,
                genres: { '$in': genres.split(','), },
            }
        }
        const boardGames = await BoardGame.find({ ...filters }).sort({ name: 1, })
        return res.json({ boardGames })
    } catch (errors) {
        return res.json({ errors })
    }
})

router.get('/id/:boardGameId', async (req, res) => {
    try {
        const { boardGameId } = req.params
        const boardGame = await BoardGame.findOne({ _id: boardGameId, })
        return res.json({ boardGame })
    } catch (errors) {
        return res.json({ errors })
    }
})

router.get('/slug/:slug', async (req, res) => {
    try {
        const { slug } = req.params
        const boardGame = await BoardGame.findOne({ slug })
        return res.json({ boardGame })
    } catch (errors) {
        return res.json({ errors })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, description, thumbURL, minPlayers, maxPlayers, minTime, maxTime, genres } = req.body
        const slug = name.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-').toLowerCase()
        let boardGame = new BoardGame({ name, slug, description, thumbURL, minPlayers, maxPlayers, minTime, maxTime, genres: genres ? genres.split(',') : [], })
        boardGame = await boardGame.save()
        return res.json({ boardGame, })
    } catch (errors) {
        return res.json({ errors })
    }
})

router.put('/:boardGameId', async (req, res) => {
    try {
        const { boardGameId } = req.params
        const { name, description, thumbURL, minPlayers, maxPlayers, minTime, maxTime, genres } = req.body
        let boardGame = await BoardGame.findOne({ _id: boardGameId, })
        boardGame.setValues({ name, description, thumbURL, minPlayers, maxPlayers, minTime, maxTime, genres })
        boardGame = await boardGame.save()
        return res.json({ boardGame, })
    } catch (errors) {
        return res.json({ errors })
    }
})

module.exports = router