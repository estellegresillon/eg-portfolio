import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import "assets/styles/base.scss";
import Home from "./components/Home";
import i18n from "./locales/i18n-config";

import toggleThemeReducer from "./redux/reducers";

const reducers = combineReducers({
  showLightTheme: toggleThemeReducer,
});

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <I18nextProvider i18n={i18n}>
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    </I18nextProvider>,
    rootElement
  );
} else {
  render(
    <I18nextProvider i18n={i18n}>
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    </I18nextProvider>,
    rootElement
  );
}
