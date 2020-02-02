import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import './index.scss';
import App from './components/app';

import toggleThemeReducer from "./redux/reducers";

const reducers = combineReducers({
  showLightTheme: toggleThemeReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
