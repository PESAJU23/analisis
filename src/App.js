import React from 'react';
import Inicio from './components/Inicio';
import Login from './components/logi';
import Regis from './components/Registrase';

function App({ toggleTheme, modoOscuro }) {
  return <Inicio toggleTheme={toggleTheme} modoOscuro={modoOscuro} />;
}

export default App;

