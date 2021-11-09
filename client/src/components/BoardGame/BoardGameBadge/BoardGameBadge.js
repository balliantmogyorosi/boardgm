import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '../../UI'

import './BoardGameBadge.css'


const BoardGameBadge = ({ boardGame, className, style }) => {
    const navigate = useNavigate()

    const handleOnClick = useCallback(() => {
        navigate(`/tarsasjatekok/${boardGame.slug}`)
    }, [navigate, boardGame])

    return (
        <Box className={["board-game-badge", className].join(' ')} style={{ ...style, }} onClick={handleOnClick}>
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
        </Box>
    )
}

export default BoardGameBadge