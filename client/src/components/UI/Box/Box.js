import React from 'react'

import './Box.css'


const Box = ({ className, children, component: Component = 'div', onClick, style, }) => {
    return (
        <Component className={['box', className].filter(Boolean).join(' ')} style={style} onClick={onClick}>
            {children}
        </Component>
    )
}

export default Box