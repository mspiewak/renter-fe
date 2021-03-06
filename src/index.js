import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { App } from "./components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Admin } from "./components/Admin";
import Tenants from "./components/Tenant";
import NewBill from "./components/NewBill";
import Income from "./components/Income";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/zadmin" component={Admin} />
        <Route exact path="/bills/:id" component={Tenants} />
        <Route exact path="/tenant/:id" component={Tenants} />
        <Route exact path="/admin/newBill" component={NewBill} />
        <Route exact path="/admin/income" component={Income} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
