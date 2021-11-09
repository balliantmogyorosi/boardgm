import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../../../constants/Colors'


const Logo = () => {
    return (
        <Link to='/'>
            <span style={{ fontSize: 24, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'underline', color: Colors.primary}}>LOGO</span>
        </Link>
    )
}

export default Logo