import React, { Component } from "react";
import "./Location.css";
import "./../../App.css";

export class Location extends Component {
  render() {
    return (
      <div className="col-lg-5 col-sm-12">
        <div className="c-border c-right-bottom">
          <div className="flex">
            <div className="star-data-container">
              <img
                src="https://i.ibb.co/NydsW3K/star.png"
                className="star-pic"
              ></img>
            </div>
            <div className="star-data-container">
              <div className="star-data-title">
                <div className="title">Location 01</div>
                <div className="sub-title">Interactive</div>
              </div>
              <div className="star-c-text spacer-top">
                Lorem ipsummpoUt enim ad minim veniam, quis nis
              </div>
              <div className="star-c-text">
                Lorem ipsummpoUt enim ad minim veniam, quis nis
              </div>
              <div className="star-c-text-big">
                Lorem ipsummpoUt enim ad minim veniam, quis nis
              </div>
              <div className="star-c-text spacer-bottom">
                Lorem ipsummpoUt enim ad minim veniam, quis nis
              </div>
            </div>
            <div className="star-data-container spacer-left">
              <div className="flex">
                <img
                  src="https://i.ibb.co/g6Dqx6C/cog.png"
                  className="cog-pic"
                  alt="cog-pic"
                ></img>
                <img
                  src="https://i.ibb.co/g6Dqx6C/cog.png"
                  className="cog-pic"
                  alt="cog-pic"
                ></img>
                <img
                  src="https://i.ibb.co/g6Dqx6C/cog.png"
                  className="cog-pic"
                  alt="cog-pic"
                ></img>
              </div>
              <div className="bottom-text">Lvl 015</div>
              <img
                src="https://i.ibb.co/wQZtp26/dots.png"
                className="dots-pic"
                alt="dots-pic"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;