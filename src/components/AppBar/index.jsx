import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import AppsIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap:0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }}  />
          <Typography sx={{fontsize: '1.2rem', color: 'primary.main' , fontWeight: 'bold'}} variant="span">Trello</Typography>
        </Box>
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
