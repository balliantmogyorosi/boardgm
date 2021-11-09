import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'


const BoardGameRules = ({ url }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(undefined)
    const minPage = 1

    const prevPage = () => setCurrentPage(currentPage => Math.max(minPage, currentPage - 1))
    const nextPage = () => setCurrentPage(currentPage => Math.min(maxPage, currentPage + 1))

    console.log(window.innerWidth)

    const width = Math.min(600, window.innerWidth - 20)

    return (
        <div className="board-game-rules">
            <a href={url} target="_blank">Letöltés</a>
            <Document file={url} onLoadSuccess={({ numPages }) => setMaxPage(numPages)} onLoadError={() => console.log('Error')}>
                <Page pageNumber={currentPage} width={width} />
            </Document>
            <button disabled={currentPage === minPage} onClick={prevPage}>&lt;</button>
            <button disabled={currentPage === maxPage} onClick={nextPage}>&gt;</button>
        </div>
    )
}

export default BoardGameRules