import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar/AppBar'
import BoardContent from './BoardContent'
import BoardBar from './BoardBar'
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
