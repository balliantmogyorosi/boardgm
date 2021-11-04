import React from 'react'

import BoardGameBadge from './components/BoardGam/BoardGameBadge/BoardGameBadge'
import Home from './containers/Home'
import BoardGame from './models/BoardGame'


const App = () => {
    const boardGame = new BoardGame('id', 'Tokió királya', 'tokio-kiralya', 'Szerezz győzelmi pontokat, vagy legyél te az utolsó túlélő', 'https://tarsasjatekok.com/files/common/2/2d/2d1/2d17c4dcb7cadd1bb00d4931edc603bc/tarsas-2017-reflexshop-tokiokiralya-lrg.jpg', 3, 6, 15, 30, ['Humor', 'Parti', 'Kocka'], 1)

    return (
        <Home />
    )
}

export default App