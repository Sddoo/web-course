import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        box-sizing: border-box;
        font-family: Roboto,sans-serif;
    }
`;

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

