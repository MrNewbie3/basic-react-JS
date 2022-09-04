import React, { Component } from "react";
class CardProduct extends Component {
  state = {
    order: 0,
  };
  handlePlus = () => {
    this.setState({ order: this.state.order + 1 });
    this.handleCounterChange(this.state.order + 1);
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({ order: this.state.order - 1 });
      this.handleCounterChange(this.state.order - 1);
    } else {
      alert("Your Order is empty!");
    }
  };
  handleCounterChange = (val) => {
    this.props.onCounterChange(val);
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="" alt="" />
        </div>
        <div className="product-title">Daging Ayam Berbumbu</div>
        <div className="product-price">Rp 430,000</div>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
