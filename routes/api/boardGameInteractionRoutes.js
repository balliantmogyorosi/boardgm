const { Router } = require('express')

const BoardGameInteraction = require('../../models/BoardGameInteraction')


const router = Router()

router.post('/:boardGameId', async (req, res) => {
    const { boardGameId, } = req.params
    const { interaction, ip, } = req.body
    try {
        const boardGameInteraction = new BoardGameInteraction({ ip, interaction, boardGame: boardGameId, })
        const boardGameInteractionIsValid = await boardGameInteraction.isValid()
        if (boardGameInteractionIsValid) {
            await boardGameInteraction.save()
        }
        return res.json()
    } catch (errors) {
        console.log(`[POST] /api/board-game-interaction/${boardGameId} errors: `, errors)
        return res.json()
    }
})

module.exports = router