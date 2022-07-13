import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global'
import Routering from './Routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routering />
  </React.StrictMode>
);

