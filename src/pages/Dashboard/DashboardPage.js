import React, { Component } from "react";
import Activate from "../../components/Activate/Activate";
import Level from "../../components/Level/Level";
import Radar from "../../components/Radar/Radar";
import Location from "../../components/Location/Location";
import "../../App.css";

export class Dashboard extends Component {
  render() {
    return (
      <div className="container c-margin-top">
        <div className="row">
          <Activate></Activate>
          <Radar></Radar>
          <Location></Location>
          <Level></Level>
        </div>
      </div>
    );
  }
}

export default Dashboard;
