import { createTheme } from '@mui/material/styles';

// Tema oscuro
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000606',
      paper: '#0a1a18',
    },
    primary: { main: '#15aa99', contrastText: '#fff' },
    secondary: { main: '#1e2e2c', contrastText: '#fff' },
    text: { primary: '#fff', secondary: '#b0d1cb', disabled: '#6e8a85' },
    divider: '#12322e',
  },
  typography: {
    fontFamily: [
      '"Montserrat"', '"Poppins"', '"Roboto"', 'Arial', 'sans-serif'
    ].join(','),
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000606',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,6,6,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #12322e',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000606',
          color: '#fff',
          borderRight: '1px solid #12322e',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0a1a18',
          color: '#fff',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#12322e',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#b0d1cb',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        contained: {
          backgroundColor: '#15aa99',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#13a08f',
            color: '#fff',
          },
        },
        outlined: {
          borderColor: '#15aa99',
          color: '#15aa99',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#13a08f',
            backgroundColor: '#0a1a18',
            color: '#13a08f',
          },
        },
      },
    },
  },
});

// Tema claro
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f7fa',
      paper: '#fff',
    },
    primary: { main: '#15aa99', contrastText: '#fff' },
    secondary: { main: '#1976d2', contrastText: '#fff' },
    text: { primary: '#222', secondary: '#4b5c6b', disabled: '#b0b0b0' },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: [
      '"Montserrat"', '"Poppins"', '"Roboto"', 'Arial', 'sans-serif'
    ].join(','),
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f7fa',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fff',
          color: '#222',
          borderRight: '1px solid #e0e0e0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#fff',
          color: '#222',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#4b5c6b',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        contained: {
          backgroundColor: '#15aa99',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#13a08f',
            color: '#fff',
          },
        },
        outlined: {
          borderColor: '#15aa99',
          color: '#15aa99',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#13a08f',
            backgroundColor: '#fff',
            color: '#13a08f',
          },
        },
      },
    },
  },
});