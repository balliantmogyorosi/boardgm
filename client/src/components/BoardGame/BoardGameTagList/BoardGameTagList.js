import React from 'react'
import BoardGameTag from '../BoardGameTag/BoardGameTag'

import './BoardGameTagList.css'


const BoardGameTagList = ({ tagList, }) => {
    return (
        <div className="board-game-tag-list">
            {tagList.map(tag => (
                <BoardGameTag
                    key={tag}
                    text={tag}
                    className="board-game-tag-list-item"
                />
            ))}
        </div>
    )
}

export default BoardGameTagList