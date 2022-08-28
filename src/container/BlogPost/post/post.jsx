import React, { Component } from "react";
function Post(props) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="content">
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}
Post.defaultProps = {
  title: "Untitled",
  desc: "Undefined",
};

export default Post;
