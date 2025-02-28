import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useColorMode } from '@docusaurus/theme-common';

const getDocusaurusTheme = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    
    return {
      primary: rootStyles.getPropertyValue('--ifm-color-primary'),
      primaryDark: rootStyles.getPropertyValue('--ifm-color-primary-dark'),
      background: rootStyles.getPropertyValue('--ifm-background-color'),
      text: rootStyles.getPropertyValue('--ifm-font-color-base'),
      // Add more variables as needed
    };
  };

// A custom theme for this app
// const theme = createTheme({
//   cssVariables: true,
//   palette: {
//     // primary: {
//     //   main: '#556cd6',
//     // },
//     // secondary: {
//     //   main: '#19857b',
//     // },
//     // error: {
//     //   main: red.A400,
//     // },
//   },
// });

// Default implementation, that you can customize
export default function Root({children}) {

    // Get theme mode from DOM attribute
  const isDarkTheme = 
  typeof document !== 'undefined' && 
  document.documentElement.getAttribute('data-theme') === 'dark';

// Get CSS variables (safe for SSR)
const getDocusaurusVariables = () => {
  if (typeof window === 'undefined') {
    return defaultLightVariables; // Fallback for SSR
  }
  
  const rootStyles = getComputedStyle(document.documentElement);
  return {
    primary: rootStyles.getPropertyValue('--ifm-color-primary'),
    background: rootStyles.getPropertyValue('--ifm-background-color'),
    text: rootStyles.getPropertyValue('--ifm-font-color-base'),
  };
};

const muiTheme = createTheme({
  palette: {
    mode: isDarkTheme ? 'dark' : 'light',
    primary: { main: getDocusaurusVariables().primary },
    background: {
      default: getDocusaurusVariables().background,
      paper: getDocusaurusVariables().background,
    },
    text: {
      primary: getDocusaurusVariables().text,
    },
  },
  // ... rest of theme config
});

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
}