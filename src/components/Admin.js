import React from "react";
import { Link } from "react-router-dom";

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/tenant/i4lrehq">Sabina Sliwka</Link>
          </li>
          <li>
            <Link to="/tenant/ggl0qk8">Malgorzata Kaczmarczyk</Link>
          </li>
          <li>
            <Link to="/tenant/4duspw0">Piotr Katana</Link>
          </li>
          <li>
            <Link to="/tenant/wm4yk48">Przemyslaw Puchalski</Link>
          </li>
          <li>
            <Link to="/tenant/j2i9kzr">Joanna Iwanczak</Link>
          </li>
          <li>
            <Link to="/tenant/hfb8yf5">Sandra Krzyżowska</Link>
          </li>
        </ul>
      </div>
    );
  }
}