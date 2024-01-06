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

function ListCards({ cards }) {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Box
      sx={{
        p: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: theme => `calc(
                  ${theme.trello.boardContentHeight} -
                  ${theme.spacing(5)} -
                  ${theme.trello.columnHeaderHeight} -
                  ${theme.trello.columnFooterHeight}
                  )`,
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        }
      }}
    >
      {cards?.map(card => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  )
}

export default ListCards
