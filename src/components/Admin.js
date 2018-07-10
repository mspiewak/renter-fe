import React from "react";
import { Link } from "react-router-dom";

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/bills/i4lrehq">Sabina Sliwka</Link>
          </li>
          <li>
            <Link to="/bills/ggl0qk8">Malgorzata Kaczmarczyk</Link>
          </li>
          <li>
            <Link to="/bills/4duspw0">Piotr Katana</Link>
          </li>
          <li>
            <Link to="/bills/wm4yk48">Przemyslaw Puchalski</Link>
          </li>
          <li>
            <Link to="/bills/j2i9kzr">Joanna Iwanczak</Link>
          </li>
        </ul>
      </div>
    );
  }
}
