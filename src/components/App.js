import React from "react";
import { Link } from "react-router";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Renter</h1>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/bills/1">Bills</Link>
          </li>
        </ul>
      </div>
    );
  }
}
