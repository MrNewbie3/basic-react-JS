import React, { Component } from "react";
import YoutubeComp from "../components/YouTubeComp/YoutubeComp";
import BlogPost from "./BlogPost/BlogPost";
import LifeCycle from "./lifeCycleComp/lifeCycleComponent";
import Product from "./product";
class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ showComponent: false });
    // }, 15000);
  }
  render() {
    return (
      <div>
        {/* <p>Youtube Component</p>
        <hr /> */}
        {/* <YoutubeComp desc="Hmm, this is video about fortuner" time="9.12" title="Review Fortuner" />
        <YoutubeComp desc="Hmm, this is video about pajero" time="2.13" title="Review Pajero" />
        <YoutubeComp desc="Hmm, this is video about become successful" time="4.12" title="Kiat Sukses 2022" />
        <YoutubeComp desc="Hmm, this is video about freedom" time="3.33" title="Apakah Kita Merdeka?" />
        <YoutubeComp /> */}
        {/* <p>Counter</p>
        <hr />
        <Product /> */}

        {/* <p>LifeCycle Component</p>
        <hr />
        {this.state.showComponent ? <LifeCycle /> : null} */}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
