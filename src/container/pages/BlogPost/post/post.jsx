import React, { Component } from "react";
function Post(props) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="content">
        <p
          className="title"
          onClick={() => {
            props.goDetail(props.data.id);
          }}
        >
          {props.title}
        </p>
        <p className="desc">{props.desc}</p>
        <button
          className="remove"
          onClick={() => {
            props.remove(props.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
Post.defaultProps = {
  title: "Untitled",
  desc: "Undefined",
};

export default Post;
