import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Theme from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
