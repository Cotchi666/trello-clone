import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, cyan, orange, deepOrange } from '@mui/material/colors'
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary:orange
      }
    }
  }
})

export default theme