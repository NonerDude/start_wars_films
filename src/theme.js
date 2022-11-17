import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  spacing: 4,
  overrides: {
    MuiCard: {
      backgroundColor: 'red'
    }
  }
});

export default theme;