import React from 'react'

import { Line } from '../../UI'

import './BoardGameBadge.css'


const BoardGameBadge = ({ boardGame, className, onClick, style }) => {
    return (
        <div className={["board-game-badge", className].join(' ')} style={{ ...style, }} onClick={onClick}>
            <div
                className="board-game-badge-background"
                style={{ backgroundImage: `url(${boardGame.thumbURL})`, }}
            />
            <div className="board-game-badge-content">
                <h5 className="board-game-name">{boardGame.name}</h5>
                <Line
                    height={4}
                    spacingVertical='0.5rem'
                />
                {/* <span>{boardGame.description.slice(0, 120)}...</span> */}
                <div className="board-game-badge-details">
                    <span>
                        <i className="fas fa-users" />
                        {boardGame.minPlayers === boardGame.maxPlayers ?
                            boardGame.minPlayers
                            :
                            `${boardGame.minPlayers}-${boardGame.maxPlayers}`
                        }
                        &nbsp;játékos</span>
                    <span>
                        <i className="fas fa-clock" />
                        {boardGame.minTime === boardGame.maxTime ?
                            boardGame.minTime
                            :
                            `${boardGame.minTime}-${boardGame.maxTime}`
                        }
                        &nbsp;perc</span>
                </div>
            </div>
        </div>
    )
}

export default BoardGameBadge