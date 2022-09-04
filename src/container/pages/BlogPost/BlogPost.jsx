import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import axios from "axios";
import Post from "./post/post";
class BlogPost extends Component {
  state = {
    post: [],
    formblogpost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };
  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({ post: res.data });
    });
  };
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI;
    });
  };
  handleDetail = (id) => {
    this.props.history.push(`/detail/${id}`);
  };
  handleFormChange = (e) => {
    let formBlogPostNew = { ...this.state.formblogpost };
    let timestamp = new Date().getTime();
    formBlogPostNew[e.target.name] = e.target.value;
    formBlogPostNew["id"] = timestamp;
    this.setState({ formblogpost: formBlogPostNew });
  };

  postDataToApi = () => {
    axios.post(`http://localhost:3004/posts`, this.state.formblogpost).then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  handleSubmit = () => {
    this.postDataToApi;
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({ post: json });
    //   });
    axios
      .get("http://localhost:3004/posts ")
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
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body-content" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post id={post.id} data={post} title={post.title} desc={post.body} remove={this.handleRemove} goDetail={this.handleDetail} />;
        })}
        <Post />
      </Fragment>
    );
  }
}

export default BlogPost;
