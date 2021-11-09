import BoardGame from '../../models/BoardGame'


export const SET_BOARD_GAMES = 'SET_BOARD_GAMES'
export const SET_BOARD_GAME = 'SET_BOARD_GAME'


const setBoardGames = (boardGames) => ({
    type: SET_BOARD_GAMES,
    payload: { boardGames, },
})

const setBoardGame = (boardGame) => ({
    type: SET_BOARD_GAME,
    payload: { boardGame, },
})

export const fetchBoardGames = () => {
    return async dispatch => {
        const res = await fetch('/api/board-games')
        const { boardGames, errors } = await res.json()
        if (errors && Object.keys(errors).length > 0) throw errors
        await dispatch(setBoardGames(boardGames.map(bG => new BoardGame(bG._id, bG.name, bG.slug, bG.description, bG.thumbURL, bG.minPlayers, bG.maxPlayers, bG.minTime, bG.maxTime, bG.genres, bG.stock))))
        return { boardGames }
    }
}

export const fetchBoardGameById = (id) => {
    return async dispatch => {
        const res = await fetch(`/api/board-games/id/${id}`)
        const { boardGame, errors } = await res.json()
        if (errors && Object.keys(errors).length > 0) throw errors
        await dispatch(setBoardGame(new BoardGame(boardGame._id, boardGame.name, boardGame.slug, boardGame.description, boardGame.thumbURL, boardGame.minPlayers, boardGame.maxPlayers, boardGame.minTime, boardGame.maxTime, boardGame.genres, boardGame.stock)))
        return { boardGame }
    }
}

export const fetchBoardGameBySlug = (slug) => {
    return async dispatch => {
        const res = await fetch(`/api/board-games/slug/${slug}`)
        const { boardGame, errors } = await res.json()
        if (errors && Object.keys(errors).length > 0) throw errors
        await dispatch(setBoardGame(new BoardGame(boardGame._id, boardGame.name, boardGame.slug, boardGame.description, boardGame.thumbURL, boardGame.minPlayers, boardGame.maxPlayers, boardGame.minTime, boardGame.maxTime, boardGame.genres, boardGame.stock)))
        return { boardGame }
    }
}