import React from 'react'

import { Line } from '../../UI'
import BoardGameBadge from '../BoardGameBadge/BoardGameBadge'

import './BoardGameList.css'


const BoardGameList = ({ boardGameList, title }) => {
    return (
        <div className="board-game-list-container">
            <h3 className="board-game-list-title">{title ? title : 'Társasjáték lista'}</h3>
            <Line
                style={{ marginLeft: 'auto', marginRight: 'auto', }}
            />
            <div className="board-game-list">
                {boardGameList.map(boardGame => (
                    <BoardGameBadge
                        key={boardGame.id}
                        boardGame={boardGame}
                        className='board-game-list-item'
                    />
                ))}
            </div>
        </div>
    )
}

export default BoardGameList