import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BoardGameList from '../components/BoardGame/BoardGameList/BoardGameList'
import { fetchBoardGames } from '../store/actions/boardGamesActions'
import Container from '../components/Layout/Container/Container'


const Home = () => {
    const dispatch = useDispatch()
    const boardGameList = useSelector(state => state.boardGames.list)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const handleFetchBoardGames = async () => {
            setIsLoading(true)
            await dispatch(fetchBoardGames())
            setIsLoading(false)
        }

        handleFetchBoardGames()
    }, [dispatch])

    if (isLoading) {
        return (
            null
        )
    }

    return (
        <div className="home">
            <Container>
                <BoardGameList
                    title='Társasjáték kínálat'
                    boardGameList={boardGameList}
                />
            </Container>
        </div>
    )
}

export default Home