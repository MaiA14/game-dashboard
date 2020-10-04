import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <Link className="navbar-brand" to="/">
              Game Portal
            </Link>
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="navbar-brand" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
