import React from "react";
import { hydrate, render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import "assets/styles/base.scss";
import i18n from "locales/i18n-config";
import { PAGES } from "utils/constants";
import Menu from "components/common/Menu";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      {PAGES.map((page) => (
        <Route
          key={page.name}
          exact
          path={page.url}
          component={page.component}
        />
      ))}
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
    rootElement
  );
} else {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
    rootElement
  );
}
