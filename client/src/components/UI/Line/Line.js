import React from 'react'


const Line = ({ width = 60, height = 6, color = '#EDC7B7', spacingVertical = '1rem', style }) => {
    return (
        <div style={{
            paddingTop: spacingVertical,
            paddingBottom: spacingVertical,
            margin: 0,
            width: width,
            ...style,
        }}>
            <div
                style={{
                    width: width,
                    height: height,
                    borderRadius: height / 2,
                    backgroundColor: color,
                    ...style,
                }}
            />
        </div>
    )
}

export default Line