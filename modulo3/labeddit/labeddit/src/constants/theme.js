import { createTheme } from '@material-ui/core/styles';
import { neutralColor, primaryColor } from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
      primary: primaryColor,
    },
  },
});

export default theme;