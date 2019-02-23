import React, { Component } from "react";
import PropTypes from "prop-types";

class SiteSlide extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = event => {
    const { id, onClick } = this.props;
    onClick(id, event);
  };

  render() {
    const { id, thumbnail, name } = this.props;
    return (
      <div className="slide" onClick={this.handleClick}>
        <img
          draggable="false"
          id={id}
          className="innerSlide"
          src={thumbnail}
          alt={name}
        />
      </div>
    );
  }
}

export default SiteSlide;
