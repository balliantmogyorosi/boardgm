import React from 'react'
import AppFooter from '../components/Navigation/AppFooter/AppFooter'
import AppHeader from '../components/Navigation/AppHeader/AppHeader'


const DefaultPage = ({ children }) => {
    return (
        <>
            <AppHeader />
            <AppHeader style={{ position: 'relative', opacity: 0, pointerEvents: 'none', }} />
            <main style={{ flex: 1, }}>
                {children}
            </main>
            <AppFooter />
        </>
    )
}

export default DefaultPage