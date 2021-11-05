import React from 'react'

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
                <div className="board-game-badge-details">
                    <span>
                        <i className="fas fa-users" />
                        &nbsp;
                        {boardGame.minPlayers === boardGame.maxPlayers ?
                            boardGame.minPlayers
                            :
                            `${boardGame.minPlayers}-${boardGame.maxPlayers}`
                        }
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        <i className="fas fa-clock" />
                        &nbsp;
                        {boardGame.minTime === boardGame.maxTime ?
                            boardGame.minTime
                            :
                            `${boardGame.minTime}-${boardGame.maxTime}`
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BoardGameBadge