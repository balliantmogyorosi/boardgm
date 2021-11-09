const { model, Schema } = require('mongoose')


const BoardGameSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    thumbURL: {
        type: String,
        required: true,
    },
    minPlayers: {
        type: Number,
        required: true,
    },
    maxPlayers: {
        type: Number,
        required: true,
    },
    recommendedPlayers: {
        type: Number,
    },
    minTime: {
        type: Number,
        required: true,
    },
    maxTime: {
        type: Number,
        required: true,
    },
    genres: [{
        type: String,
        default: [],
    }],
    stock: {
        type: Number,
        default: true,
    },
}, { versionKey: false, timestamps: false, })

BoardGameSchema.methods = {
    setValues: function ({ name, description, thumbURL, minPlayers, maxPlayers, recommendedPlayers, minTime, maxTime, genres, stock, }) {
        this.name = name
        this.description = description
        this.thumbURL = thumbURL
        this.minPlayers = minPlayers
        this.maxPlayers = maxPlayers
        this.recommendedPlayers = recommendedPlayers
        this.minTime = minTime
        this.maxTime = maxTime
        this.genres = genres
        this.stock = stock
        return this
    }
}

module.exports = BoardGame = model('BoardGame', BoardGameSchema)