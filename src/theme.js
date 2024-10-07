import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A73E8',  // Modern blue
    },
    secondary: {
      main: '#FF4081',  // Engaging pink
    },
    background: {
      default: '#F9FAFB',  // Light background color
    },
    text: {
      primary: '#333333',  // Dark gray for readability
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',  // Professional and clean font
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
    button: {
      textTransform: 'none',  // More professional style for buttons
    },
  },
});

export default theme;
