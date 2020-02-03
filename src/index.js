import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { I18nextProvider } from 'react-i18next';

import './index.scss';
import App from './components/app';
import i18n from './locales/i18n-config';

import toggleThemeReducer from "./redux/reducers";

const reducers = combineReducers({
  showLightTheme: toggleThemeReducer,
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);
