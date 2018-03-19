import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, hashHistory } from "react-router";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { App } from "./components/App";
import Bills from "./components/Bills";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/bills/:id" component={Bills} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
