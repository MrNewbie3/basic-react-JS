import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import axios from "axios";
import Post from "./post/post";
class BlogPost extends Component {
  state = { post: [] };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({ post: json });
    //   });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        this.setState({ post: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>;
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
        <Post />
      </Fragment>
    );
  }
}

export default BlogPost;
