import React from 'react'

import Container from '../../Layout/Container/Container'
import { Box } from '../../UI'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'

import './AppHeader.css'


const AppHeader = ({ style }) => {
    return (
        <Box className="app-header" component='header' style={style}>
            <Container className="app-header-container">
                <Logo

                />
                <Menu

                />
            </Container>
        </Box>
    )
}

export default AppHeader