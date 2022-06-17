import { extendTheme, type ThemeConfig, theme as base } from '@chakra-ui/react';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      '*, *::before, *::after': {
        margin: '0',
        padding: '0',
        boxSizing: 'inherit',
      },
      html: {
        boxSizing: 'border-box',
        height: '100vh',
      },
      body: {
        width: '100%',
        height: '100%',
      },
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  fonts: {
    heading: `Source Sans Pro, ${base.fonts?.heading}`,
    body: `Racing Sans One, ${base.fonts?.body}`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '3.5xl': '2rem',
    '4xl': '2.25rem',
    '4.5xl': '2.75rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
    
  },
});
export default theme;


/*
  
*/ 