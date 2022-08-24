import { createTheme } from '@mui/material/styles';
import { red, brown, grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    logo: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logo: true;
  }
}


// Create a theme instance.
const theme = createTheme({
  typography: {
    logo: {
      fontFamily: [
        '"Noto Serif JP"',
        'Serif' 
      ].join(','),
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em"
    },
  },  
   palette: {
    primary: {
      main: brown[500],
      light: '#a98274',
      dark: '#4b2c20',
    },
    secondary: {
      main: grey[500],
      light: '#cfcfcf',
      dark: '#707070'
    },
    error: {
      main: red.A400,
    },

  }, 
});

export default theme;
