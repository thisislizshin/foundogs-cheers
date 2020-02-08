import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "redux/configureStore";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Theme from "styles/Theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
