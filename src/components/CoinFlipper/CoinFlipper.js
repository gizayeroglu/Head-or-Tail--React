import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "tura",
      flipping: false,
      totalShot: 0,
      head: 0,
      tail: 0,
    };
  }
  handleClick = () => {
    let headOrTail = Math.round(Math.random());
    setTimeout(() => {
      if (headOrTail > 0) {
        this.setState({ side: "yazi" });
        this.state.head++;
      } else {
        this.setState({ side: "tura" });
        this.state.tail++;
      }
    }, 1000);
    this.setState({ flipping: true });
    this.state.totalShot++;
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className='CoinFlipper'>
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.totalShot} </strong>
          atıştan
          <br></br>
          <strong> {this.state.tail} </strong>tanesi tura
          <br></br>
          <strong> {this.state.head} </strong>
          tanesi yazı geldi.
        </p>
      </div>
    );
  }
}
export default CoinFlipper;
