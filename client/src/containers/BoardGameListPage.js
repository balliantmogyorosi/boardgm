import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoardGameList } from '../components/BoardGame'
import Container from '../components/Layout/Container/Container'
import DefaultPage from '../hoc/DefaultPage'
import { fetchBoardGames } from '../store/actions/boardGamesActions'


const BoardGameListPage = () => {
    const dispatch = useDispatch()
    const boardGameList = useSelector(state => state.boardGames.list)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleFetchBoardGames = async () => {
            try {
                setIsLoading(true)
                await dispatch(fetchBoardGames())
                setIsLoading(false)
            } catch (errors) {
                console.log(errors)
            }
        }

        handleFetchBoardGames()
    }, [dispatch])

    // if (isLoading) {
    //     return (
    //         null
    //     )
    // }

    return (
        <DefaultPage>
            <div className="board-game-list-page">
                <Container>
                    <BoardGameList
                        boardGameList={boardGameList}
                    />
                </Container>
            </div>
        </DefaultPage>
    )
}

export default BoardGameListPage