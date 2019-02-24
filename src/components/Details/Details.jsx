import React from "react";
import PropTypes from "prop-types";
import styles from "./Details.module.css";
import ReactHTMLParser from "react-html-parser";
import Divider from "./img/Lines-TwoYellowDividers.png";
import { ANIMATION_ACTIONS } from "../../constants/constants";
import classnames from "classnames";

class Details extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    details: PropTypes.string,
    detailsClassName: PropTypes.string,
    detailsTitleClassName: PropTypes.string,
    detailsTextClassName: PropTypes.string,
    separatorImgSrc: PropTypes.string,
    animation: PropTypes.node
  };

  static defaultProps = {
    separatorImgSrc: Divider
  };
  /**
   * I have some usecases where this details pane changes itself as the animation continues,
   * TODO: I should probably remove this local state and move this up the chain with redux actions
   */
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  handleNextAction = action => {
    if (action.action === ANIMATION_ACTIONS.UPDATE_TEXT) {
      this.setState({
        ...action,
        subTitle: action.subTitle || null
      });
    }
  };
  render() {
    const {
      title,
      subTitle,
      details,
      detailsClassName,
      detailsTitleClassName,
      detailsTextClassName,
      separatorImgSrc,
      animation
    } = this.state;

    return (
      <div className={classnames(styles.details, detailsClassName)}>
        <div className={classnames(styles.title, detailsTitleClassName)}>
          {title}
        </div>
        <img className={styles.separator} src={separatorImgSrc} alt="" />
        {subTitle ? <div className={styles.subTitle}>{subTitle}</div> : null}
        <div className={classnames(styles.blurb, detailsTextClassName)}>
          {ReactHTMLParser(details)}
        </div>
        {animation ? (
          <div className={styles.animation}>
            {React.cloneElement(animation, {
              onNextAction: this.handleNextAction // Need to callback to the state updater
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Details;
