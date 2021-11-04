import { combineReducers } from 'redux'

import boardGamesReducer from './boardGamesReducer'


export default combineReducers({
    boardGames: boardGamesReducer,
})