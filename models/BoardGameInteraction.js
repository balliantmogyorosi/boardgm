const { model, Schema } = require('mongoose')
const moment = require('moment')


const BoardGameInteractionSchema = new Schema({
    ip: {
        type: String,
        required: true,
    },
    boardGame: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    interaction: {
        type: String, // click, ...
        required: true,
    },
    date: {
        type: Date,
        default: moment().format('YYYY-MM-DD'),
    },
}, { versionKey: false, timestamps: false, _id: false, })

BoardGameInteractionSchema.methods = {
    isValid: async function () {
        const today = moment().format('YYYY-MM-DD')
        const boardGameInteractions = await BoardGame.find({
            ip: this.ip,
            boardGame: this.boardGame,
            interaction: this.interaction,
            date: today,
        })
        return boardGameInteractions.length === 0
    },
}

module.exports = BoardGameInteraction = model('BoardGameInteraction', BoardGameInteractionSchema)