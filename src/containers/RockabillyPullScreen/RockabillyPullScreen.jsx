import React, { Fragment } from "react";
import { withRouter } from "react-router";
import PullScreen from "../../components/PullScreen/PullScreen";
import introBannerSrc from "./img/01PullScreen-IntroBanner@2x.png";
import introRecordSrc from "./img/01PullScreen-Record@2x.png";
import styles from "./RockabillyPullScreen.module.css";
import { ROUTES } from "../../constants/constants";

class RockabillyPullScreen extends React.Component {
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
  };
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
        <img
          src={introRecordSrc}
          alt="Record"
          className={styles.introRecord}
          onClick={this.showSelection}
        />
      </Fragment>
    );
  }
}

export default withRouter(RockabillyPullScreen);
