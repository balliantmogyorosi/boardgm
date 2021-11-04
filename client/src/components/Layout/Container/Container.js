import React from 'react'

import './Container.css'


const Container = ({ children, className, ...props }) => {
    return (
        <div className={["container", className].filter(Boolean).join(' ')} {...props}>
            {children}
        </div>
    )
}

export default Container