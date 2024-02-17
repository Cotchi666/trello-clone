import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardContent from './BoardContent/BoardContent'
import BoardBar from './BoardBar/BoardBar'
import { fetchBoardDetailsAPI } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '65ced0ed4755f1e9b96d1209'
    // clumns
    // card 65ced49feec1749561b98688
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  )
}

export default Board
