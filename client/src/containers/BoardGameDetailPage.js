import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { BoardGameDetail } from '../components/BoardGame'
import Container from '../components/Layout/Container/Container'
import DefaultPage from '../hoc/DefaultPage'
import { fetchBoardGameBySlug } from '../store/actions/boardGamesActions'


const BoardGameDetailPage = () => {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const boardGame = useSelector(state => state.boardGames.current)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleFetchBoardGameBySlug = async () => {
            try {
                setIsLoading(true)
                await dispatch(fetchBoardGameBySlug(slug))
                console.log('[dispatch:fetchBoardGameBySlug]')
                setIsLoading(false)
            } catch (errors) {
                console.log(errors)
            }
        }

        handleFetchBoardGameBySlug(slug)
    }, [dispatch, slug])

    if (isLoading) {
        return (
            null
        )
    }

    return (
        <DefaultPage>
            <div className="board-game-detail-page">
                <Container>
                    <BoardGameDetail
                        boardGame={boardGame}
                    />
                </Container>
            </div>
        </DefaultPage>
    )
}

export default BoardGameDetailPage