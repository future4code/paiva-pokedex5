import React from 'react';
import Router from './routes/Router';
import GlobalState from "./global/GlobalState";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
    
  );
}

export default App;
