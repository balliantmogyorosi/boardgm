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
        console.log(boardGames)
        await dispatch(setBoardGames(boardGames))
        return { boardGames }
    }
}

export const fetchBoardGameById = (id) => {
    return async dispatch => {
        const res = await fetch(`/api/board-games/id/${id}`)
        const { boardGame, errors } = await res.json()
        if (errors && Object.keys(errors).length > 0) throw errors
        await dispatch(setBoardGame(boardGame))
        return { boardGame }
    }
}

export const fetchBoardGameBySlug = (slug) => {
    return async dispatch => {
        const res = await fetch(`/api/board-games/id/${slug}`)
        const { boardGame, errors } = await res.json()
        if (errors && Object.keys(errors).length > 0) throw errors
        await dispatch(setBoardGame(boardGame))
        return { boardGame }
    }
}