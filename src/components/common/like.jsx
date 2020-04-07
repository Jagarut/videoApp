import React, { Component } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export class Like extends Component {
  render() {
    if (this.props.liked)
      return (
        <FaHeart onClick={this.props.onClick} style={{ cursor: "pointer" }} />
      );
    return (
      <FaRegHeart onClick={this.props.onClick} style={{ cursor: "pointer" }} />
    );
  }
}

export default Like;
