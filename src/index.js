import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { store } from "./helpers";
import { App } from "./App";


// setup fake backend
import { configureFakeBackend } from "./helpers";
configureFakeBackend();

const rootElement = document.getElementById("app");

ReactDOM.render(
  
    <Provider store={store}>
      <App/>
    </Provider>,
  rootElement
);
