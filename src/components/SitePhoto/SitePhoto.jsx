import React from "react";
import PropTypes from "prop-types";
import styles from "./SitePhoto.module.css";
import dottedSeparator from "./img/03InternalPage-CreditLineDividerDots@2x.png";
import classnames from "classnames";

const propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.node.isRequired,
  imageClassName: PropTypes.string
};

const SitePhoto = ({ caption, imageClassName, alt, ...others }) => (
  <div className={styles.artistPhoto}>
    <img
      className={classnames(styles.image, imageClassName)}
      {...others}
      alt={alt}
    />
    <img className={styles.separator} src={dottedSeparator} alt="" />
    <div className={styles.caption}>{caption}</div>
  </div>
);

SitePhoto.propTypes = propTypes;

export default SitePhoto;
