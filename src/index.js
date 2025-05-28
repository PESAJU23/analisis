import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './temas/Theme';

function Root() {
  const [modoOscuro, setModoOscuro] = useState(true);

  return (
    <ThemeProvider theme={modoOscuro ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleTheme={() => setModoOscuro(m => !m)} modoOscuro={modoOscuro} />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
