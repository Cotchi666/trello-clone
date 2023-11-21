import { createTheme } from '@mui/material/styles'
import { orange, pink, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode:'dark',

    primary: {
      main: pink[500]
    },
    secondary: {
      main: orange[500]
    },
    error: {
      main: red[500]
    },
    text: {
      secondary: red[500]
    }
  }
})
export default theme