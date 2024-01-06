import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from './Column/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'auto',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}
    >
      <Column />
      <Column />
      {/* Box add new column CTA */}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          border: '6px',
          height: 'fit-content',
          bgcolor: 'ffffff3d'
        }}
      >
        <Button
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
          startIcon={<NoteAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
