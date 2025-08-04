// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A5ACD', // soft violet
    },
    secondary: {
      main: '#FFC0CB', // pastel pink
    },
    background: {
      default: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
});

export default theme;
