import React, { Fragment } from "react";
import { withRouter } from "react-router";
import PullScreen from "../../components/PullScreen/PullScreen";
import LottieControl from "../../components/LottieControl/LottieControl";
import animationData from "./animation/01PullScreen-IntroBanner.json";
import introRecordSrc from "./img/01PullScreen-Record@2x.png";
import styles from "./RockabillyPullScreen.module.css";
import { ROUTES } from "../../constants/constants";
import "animate.css/animate.min.css";

import glowMask from "./animation/images/glow_mask.png";
import rockabillyMask from "./animation/images/rockabilly_glow_mask.png";

class RockabillyPullScreen extends React.Component {
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
  };
  render() {
    return (
      <Fragment>
        <PullScreen >
        <div className={styles.title}>Arkansas State University Museum Presents</div>
          <LottieControl
            animationData={animationData}
            className={styles.introBanner}
            imageMap={[
              { name: "glow_mask.png", path: glowMask },
              { name: "rockabilly_glow_mask.png", path: rockabillyMask }
            ]}
            isLooping
          />
          <div className={styles.callToAction}>Touch the screen to begin.</div>
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
