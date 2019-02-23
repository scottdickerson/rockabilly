import React from "react";
import PropTypes from "prop-types";
import styles from "./SitePhoto.module.css";
import dottedSeparator from "./img/03InternalPage-CreditLineDividerDots@2x.png";

const propTypes = {
  src: PropTypes.string.isRequired,
  photoCredit: PropTypes.node.isRequired
};

const SitePhoto = ({ src, photoCredit }) => (
  <div className={styles.artistPhoto}>
    <img className={styles.image} src={src} alt={photoCredit} />
    <img className={styles.separator} src={dottedSeparator} alt="" />
    <div className={styles.caption}>{photoCredit}</div>
  </div>
);

SitePhoto.propTypes = propTypes;

export default SitePhoto;
