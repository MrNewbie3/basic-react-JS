import axios from "axios";
import React, { Component } from "react";
class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:3004/posts/${id}`)
      .then((result) => {
        let post = result.data;
        this.setState({
          post: {
            title: post.title,
            body: post.body,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="">
        <p>{this.state.post.title}</p>
        <p>{this.state.post.body}</p>;
      </div>
    );
  }
}

export default DetailPost;
