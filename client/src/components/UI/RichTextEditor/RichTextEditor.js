import React from 'react'
import Suneditor from 'suneditor-react'
import { align, font, fontColor, fontSize, } from 'suneditor/src/plugins'


const RichTextEditor = () => {
    return (
        <Suneditor
            setOptions={{
                plugins: [
                    align,
                    font,
                    fontColor,
                    fontSize,
                ],
                buttonList: [
                    ['font', 'fontSize', 'fontColor'],
                    ['bold', 'italic', 'underline'],
                ]
            }}
        />
    )
}

export default RichTextEditor