import React, { Component, Fragment } from "react";
import "./lifeCycle.css";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  static getDerivedStateFromProps(props, state) {}
  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 2 });
      return false;
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  componentWillUnmount() {}
  changeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <Fragment>
        <p>Halaman Lifecycle</p>
        <button className="btn" onClick={this.changeCount}>
          {" "}
          Component Button {this.state.count}
        </button>
      </Fragment>
    );
  }
}

export default LifeCycle;
