import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavigationHeader from '../components/Navigation/NavigationHeader/NavigationHeader'
import BoardGameList from '../components/BoardGam/BoardGameList/BoardGameList'
import Hero from '../components/Hero/Hero'
import { fetchBoardGames } from '../store/actions/boardGamesActions'
import NavigationFooter from '../components/Navigation/NavigationFooter/NavigationFooter'
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

    console.log(isLoading)

    return (
        <div className="home">
            <NavigationHeader

            />
            <Hero
                backgroundImage="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80"
                title="Board GM"
                text="Társasjátékos kávézó"
            />
            <Container>
                <BoardGameList
                    title='Társasjáték kínálatunk'
                    boardGameList={boardGameList}
                />
            </Container>
            <NavigationFooter

            />
        </div>
    )
}

export default Home