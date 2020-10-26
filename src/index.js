import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

//import "./index.scss";
import "assets/styles/base.scss";
import Home from "./compo/Home";
// import Detail from "./components/detail";
import i18n from "./locales/i18n-config";

import toggleThemeReducer from "./redux/reducers";

const reducers = combineReducers({
  showLightTheme: toggleThemeReducer,
});

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/kardinal" component={Detail} />
      <Route exact path="/rafaelbolano" component={Detail} />
      <Route exact path="/foodlab" component={Detail} />
      <Route exact path="/zest" component={Detail} />
      <Route exact path="/santorini" component={Detail} />
      <Route exact path="/thatsmyrock" component={Detail} />
      <Route exact path="/otaku" component={Detail} /> */}
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
