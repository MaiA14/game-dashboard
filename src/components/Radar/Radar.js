import React, { Component } from "react";
import "./Radar.css";
import './../../App.css';

export class Radar extends Component {
  render() {
    return (
      <div class="col-lg-5 col-sm-12">
        <div class="c-border c-right-top">
          <div class="triangle-corner">
            <div class="stripes"></div>
          </div>
          <div class="flex-col">
            <div class="title">Radar</div>
            <div class="sub-title">01-87R</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radar;
