import React from 'react'

import './Modal.css'


const Modal = ({ children, component: Component = 'div', isOpen, onClose, }) => {
    if (!isOpen) return null

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose} />
            <Component className="modal-content">
                {children}
            </Component>
        </div>
    )
}

export default Modal