import { SET_BOARD_GAME, SET_BOARD_GAMES } from '../actions/boardGamesActions'


const initialState = {
    list: [],
    current: {},
}

const boardGamesReducer = (state = initialState, action) => {
    const { payload, type, } = action
    switch (type) {
        case SET_BOARD_GAMES:
            return {
                ...state,
                list: payload.boardGames,
            }
        case SET_BOARD_GAME:
            return {
                ...state,
                current: payload.boardGame,
            }
        default:
            return state
    }
}

export default boardGamesReducer