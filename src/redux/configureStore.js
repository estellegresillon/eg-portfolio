import { combineReducers, createStore } from "redux";

import toggleThemeReducer from "./reducers";

const reducers = combineReducers({
  showLightTheme: toggleThemeReducer,
});

function makeStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
  );

  return store;
}

export default makeStore