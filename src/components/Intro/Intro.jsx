import React from "react";
import PropTypes from "prop-types";
import ReactHTMLParser from "react-html-parser";
import classnames from "classnames";

import styles from "./Intro.module.css";

const propTypes = {
  intro: PropTypes.string.isRequired,
  details: PropTypes.string,
  className: PropTypes.string,
  textClassName: PropTypes.string,
  detailsClassName: PropTypes.string
};

const Intro = props => {
  const { intro, details, className, textClassName, detailsClassName } = props;
  return (
    <div className={classnames(styles.intro, className)}>
      <div className={classnames(styles.introText, textClassName)}>
        {ReactHTMLParser(intro)}
      </div>
      <div className={styles.introDetails}>
        <div className={classnames(styles.introDetailsText, detailsClassName)}>
          {ReactHTMLParser(details)}
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = propTypes;

export default Intro;
