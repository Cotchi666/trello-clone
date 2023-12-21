import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import AppsIcon from '@mui/icons-material/Apps'
function AppBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <SvgIcon component={TrelloIcon} inheritViewBox font-size="small" sx={{ color: 'primary.main' }}  />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
