import React, { Component, Fragment } from "react";
import BlogPost from "./pages/BlogPost/BlogPost";
import LifeCycle from "./pages/lifeCycleComp/lifeCycleComponent";
import Product from "./pages/Product/product";
import { BrowserRouter, Route, Link } from "react-router-dom";
import YoutubeCompPage from "./pages/YouTubeCompval/YoutubePage";
import DetailPost from "./pages/BlogPost/detailPost/DetailPost";
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
      <BrowserRouter>
        <Fragment>
          <div className="">
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/lifecycle"}>LifeCycle</Link>
            <Link to={"/youtube"}>Youtube</Link>
          </div>
          <Route path={"/"} exact component={BlogPost} />
          <Route path={"/detail/:id"} component={DetailPost} />
          <Route path={"/product"} component={Product} />
          <Route path={"/lifecycle"} component={LifeCycle} />
          <Route path={"/youtube"} component={YoutubeCompPage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
