import { useState } from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from './Card/Card'

function ListCards() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: theme =>
          `calc(
     ${theme.trello.boardContentHeight} - 
     ${theme.spacing(5)} - 
     ${theme.trello.columnHeaderHeight}-
     ${theme.trello.columnFooterHeight}
     )`,
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ecd0da' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: 'bfc2cf' }
      }}
    >
      <Card />
      <Card temporaryHideMedia />
    </Box>
  )
}

export default ListCards
