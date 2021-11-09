import React, { useState } from 'react'

import { Box, Button, Modal } from '../../UI'
import BoardGameTagList from '../BoardGameTagList/BoardGameTagList'
import BoardGameRules from '../BoardGameRules/BoardGameRules'


import './BoardGameDetail.css'
import Container from '../../Layout/Container/Container'


const BoardGameDetail = ({ boardGame, }) => {
    const [isRulesOpen, setIsRulesOpen] = useState(false)

    return (
        <div className="board-game-detail">
            <div className="board-game-detail-images">
                <Box
                    style={{
                        width: 300,
                        height: 300,
                        backgroundImage: `url(${boardGame.thumbURL})`,
                        backgroundSize: 'cover',
                    }}
                />
            </div>
            <div className="board-game-detail-info">
                <h2>{boardGame.name}</h2>
                <BoardGameTagList
                    tagList={boardGame.genres}
                />
                <div>
                    {/* <a href={`http://localhost:8080 /assets/rules/${boardGame.slug}.pdf`}>Szabályok</a> */}
                    <Button onClick={() => setIsRulesOpen(true)}>
                        Szabályok
                    </Button>
                    <Modal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} component={Box}>
                        <BoardGameRules
                            url={`/assets/rules/${boardGame.slug}.pdf`}
                        />
                    </Modal>
                </div>
            </div>
            <div className="board-game-detail-descriptions">
                <p>{boardGame.description}</p>
                <div>


                </div>
            </div>
        </div>
    )
}

export default BoardGameDetail