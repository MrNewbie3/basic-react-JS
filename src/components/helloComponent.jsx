import React from "react";
import "./helloComponents.css";
const HelloComponent = (props) => {
  return <p className="aqua"> Hello World {props.name}</p>;
};
export default HelloComponent;
