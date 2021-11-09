import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './containers/HomePage'
import BoardGameListPage from './containers/BoardGameListPage'
import BoardGameDetailPage from './containers/BoardGameDetailPage'


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tarsasjatekok' element={<BoardGameListPage />} />
            <Route path='/tarsasjatekok/:slug' element={<BoardGameDetailPage />} />
        </Routes>
    )
}

export default App