import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { App } from "./components/App";
import Bills from "./components/Bills";
import { BrowserRouter as Router, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/zadmin" component={App} />
        <Route path="/bills/:id" component={Bills} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
