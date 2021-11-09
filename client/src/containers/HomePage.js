import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BoardGameList from '../components/BoardGame/BoardGameList/BoardGameList'
import { fetchBoardGames } from '../store/actions/boardGamesActions'
import Container from '../components/Layout/Container/Container'
import Hero from '../components/Hero/Hero'
import DefaultPage from '../hoc/DefaultPage'


const HomePage = () => {
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
    //     return (
    //         null
    //     )
    }

    return (
        <DefaultPage>
            <div className="home">
                <Hero
                    backgroundImage='https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    title='JTKBay, ...'
                    text='Egy ütős szlogen helye ...'
                />
                <Container>
                    <BoardGameList
                        title='Társasjáték kínálat'
                        boardGameList={boardGameList}
                    />
                </Container>
            </div>
        </DefaultPage>
    )
}

export default HomePage