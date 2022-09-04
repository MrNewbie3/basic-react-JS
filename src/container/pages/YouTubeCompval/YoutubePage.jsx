import React, { Component, Fragment } from "react";
import YoutubeComp from "./YoutubeComp";
class YoutubeCompPage extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <p>YouTube Component</p>
        <hr />
        <YoutubeComp time="7.12" title="Tutorial React JS Bagian 1" desc="2x ditonton . 2 hari yang lalu" />
        <YoutubeComp time="8. 02" title="Tutorial React JS - Bagian 2" desc="200x ditonton. 10 hari yang lalu" />
        <YoutubeComp time="5.04" title="Tutorial React 3S - Bagian3" desc="500x ditonton. 4 hari yang lalu" />
        <YoutubeComp time="4.12" title=" Tutorial React 35 - Bagian4" desc="1k ditonton . 14 hari yang lalu" />
        <YoutubeComp />
      </Fragment>
    );
  }
}

export default YoutubeCompPage;
