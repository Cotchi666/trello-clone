import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import SvgIcon from '@mui/material/SvgIcon'
import trelloLogo from '~/assets/trello.svg'
function AppBar() {
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
      <Box>
        <SvgIcon sx={{ color: 'primary.main' }} />
        <img src={trelloLogo} alt="trello logo" />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
