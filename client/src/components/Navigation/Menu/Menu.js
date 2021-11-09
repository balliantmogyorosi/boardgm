import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'


const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-list-item">
                    <Link className="menu-list-item-link" to="/">Főoldal</Link>
                </li>
                <li className="menu-list-item">
                    <Link className="menu-list-item-link" to="/tarsasjatekok">Társasjátékok</Link>
                </li>
                <li className="menu-list-item">
                    <Link className="menu-list-item-link" to="/kapcsolat">Kapcsolat</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu