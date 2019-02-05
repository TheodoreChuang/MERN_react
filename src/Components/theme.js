import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#63CCFF",
      main: "#009BE5",
      dark: "#006DB3",
      contrastText: "#FAFAFA"
    },
    secondary: {
      main: "#00E871"
    },
    background: {
      light: "#FAFAFA"
    }
  }
});

export default theme;
