import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import {dartTheme} from "./theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={dartTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
