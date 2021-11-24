import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, HashRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="https://valensiaa.github.io/test-task-Yalantis-React.js//" element={<App />} />
          <Route exact path="https://valensiaa.github.io/test-task-Yalantis-React.js//employees" element={<App />} />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
