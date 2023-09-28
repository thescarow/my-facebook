import { createMuiTheme } from "@material-ui/core/styles"
import { teal, orange } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2c47de",
      main: "#0f0096",
      dark: "#000067",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffd95b",
      main: "#ffa726",
      dark: "#c77800",
      contrastText: "#000"
    },
    openTitle: teal["700"],
    protectedTitle: orange["700"],
    type: "light"
  }
})

export default theme
