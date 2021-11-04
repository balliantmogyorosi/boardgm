class BoardGame {

    constructor(id, name, slug, description, thumbURL, minPlayers, maxPlayers, minTime, maxTime, genres, stock) {
        this.id = id
        this.name = name
        this.slug = slug
        this.description = description
        this.thumbURL = thumbURL
        this.minPlayers = minPlayers
        this.maxPlayers = maxPlayers
        this.minTime = minTime
        this.maxTime = maxTime
        this.genres = genres
        this.stock = stock
    }

}

export default BoardGame