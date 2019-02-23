import React from "react";
import PropTypes from "prop-types";

import styles from "./TopTitle.module.css";
import classnames from "classnames";

const propTypes = {
  imageURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const TopTitle = props => (
  <div className={classnames(styles.topTitleImage, props.className)}>
    <img width="100%" src={props.imageURL} alt="title" />
    <div className={classnames(styles.titleText, styles.topTitleText)}>
      {props.children}
    </div>
  </div>
);

TopTitle.propTypes = propTypes;
export default TopTitle;
