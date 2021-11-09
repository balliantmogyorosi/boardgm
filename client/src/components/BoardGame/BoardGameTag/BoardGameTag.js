import React from 'react'
import { Box } from '../../UI'

import './BoardGameTag.css'


const BoardGameTag = ({ className, onClick, text }) => {
    return (
        <Box className={["board-game-tag", className].filter(Boolean).join(' ')} onClick={onClick}>
            <span className="board-game-tag-text">{text}</span>
        </Box>
    )
}

export default BoardGameTag