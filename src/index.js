import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./views/dOne/clock";
import ChatApp from "./views/dOne/chatapp";
import reportWebVitals from "./reportWebVitals";

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { Provider } from "react-redux";
// import { createLogger } from "redux-logger";
// // import { thunk } from "redux-thunk";
// const {thunkMiddleware} = require('redux-thunk');

// const initialState = {
//   usingRedux: true,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "save":
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

// exports.configureStore = function(initialState){
// const store = createStore(order,initialState,applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
