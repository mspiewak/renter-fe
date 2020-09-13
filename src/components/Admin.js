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
          <li>
            <Link to="/tenant/jaf8eg3">Małgorzata Baczyńska-Biłek</Link>
          </li>
          <li>
            <Link to="/tenant/kds9bd7">Kamil Kowolik</Link>
          </li>
          <li>
            <Link to="/tenant/bgx3n81">Aneta Włodarczyk</Link>
          </li>
          <li>
            <Link to="/tenant/pw8bvo9">Danuta Molikiewicz</Link>
          </li>
          <li>
            <Link to="/tenant/kc8dn4j">Marek Mikolajczak</Link>
          </li>
          <li>
            <Link to="/tenant/fgb2g6">Adrian Konior</Link>
          </li>
        </ul>
        <div>
          <Link to="admin/newBill">New Bill</Link>
        </div>
        <div>
          <Link to="admin/income">Income</Link>
        </div>
      </div>
    );
  }
}
