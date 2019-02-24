import React from "react";
import PropTypes from "prop-types";
import styles from "./SitePhoto.module.css";
import dottedSeparator from "./img/03InternalPage-CreditLineDividerDots@2x.png";

const propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.node.isRequired
};

const SitePhoto = ({ src, caption }) => (
  <div className={styles.artistPhoto}>
    <img className={styles.image} src={src} alt={caption} />
    <img className={styles.separator} src={dottedSeparator} alt="" />
    <div className={styles.caption}>{caption}</div>
  </div>
);

SitePhoto.propTypes = propTypes;

export default SitePhoto;
