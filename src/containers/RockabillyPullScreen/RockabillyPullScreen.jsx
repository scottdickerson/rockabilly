import React, { Fragment } from "react";
import PullScreen from "../../components/PullScreen/PullScreen";
import introBannerSrc from "./img/01PullScreen-IntroBanner@2x.png";
import introRecordSrc from "./img/01PullScreen-Record@2x.png";
import styles from "./RockabillyPullScreen.module.css";

class RockabillyPullScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <PullScreen>
          <img
            src={introBannerSrc}
            alt="Local Rockabilly Legends"
            className={styles.introBanner}
          />
        </PullScreen>
        <img src={introRecordSrc} alt="Record" className={styles.introRecord} />
      </Fragment>
    );
  }
}

export default RockabillyPullScreen;
