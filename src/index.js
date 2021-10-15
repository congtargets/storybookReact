import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const initialState = {
  usingRedux: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "save":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
const middleware = [thunk];
console.log("middleware");
console.log(middleware);
console.log("process");
console.log(process);
if (process.env.NODE_ENV !== "production") {
  middleware.push(createlogger());
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
