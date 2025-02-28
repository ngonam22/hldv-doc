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
const isDarkTheme = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';
// Define default light theme variables (matches Docusaurus defaults)
const defaultThemeVariables = {
  light: {
    primary: '#3578e5',  // Docusaurus default primary blue
    background: '#ffffff',  // White background
    text: '#1a1a1a',  // Dark text
    primaryDark: '#2b6cb0'  // Darker blue
  },
  dark: {
    primary: '#25c2a0',  // Docusaurus dark mode primary
    background: '#181920',  // Dark background
    text: '#ffffff',  // White text
    primaryDark: '#1f8974'  // Darker teal
  }
};

// Get CSS variables (safe for SSR)
const getDocusaurusVariables = () => {
  if (typeof window === 'undefined') {
    return defaultThemeVariables.light; // Fallback for SSR
  }
  
  const rootStyles = getComputedStyle(document.documentElement);
  return {
    primary: rootStyles.getPropertyValue('--ifm-color-primary').trim(),
    background: rootStyles.getPropertyValue('--ifm-background-color').trim(),
    text: rootStyles.getPropertyValue('--ifm-font-color-base').trim(),
    primaryDark: rootStyles.getPropertyValue('--ifm-color-primary-dark').trim() || defaultThemeVariables.light.primaryDark
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