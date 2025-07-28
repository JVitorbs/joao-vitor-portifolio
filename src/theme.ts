import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#476648FF',
    },
  },
  typography: {
    fontFamily: "Segoe UI, Roboto, sans-serif"
  },
});

theme = responsiveFontSizes(theme);

export default theme;