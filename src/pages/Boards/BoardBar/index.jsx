import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
        Board Bar
    </Box> )
}

export default BoardBar