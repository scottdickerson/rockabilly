import React, { Fragment } from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import Intro from "../../components/Intro/Intro";
import TopTitle from "../../components/TopTitle/TopTitle";
import titleImage from "./img/02CarouselBanner@2x.png";
import RockabillyCarousel from "../RockabillyCarousel/RockabillyCarousel";
import RockabillyArtistDetails from "../RockabillyArtistDetails/RockabillyArtistDetails";

import { Route, withRouter } from "react-router";
import { ROUTES } from "../../constants/constants";
import styles from "./RockabillyMainScreen.module.css";

class RockabillyMainScreen extends React.Component {
  state = {
    carouselSiteIndex: 0
  };
  handleSiteChanged = (previousIndex, carouselSiteIndex) =>
    this.setState({ carouselSiteIndex });

  handleSelection = selectedSite => {
    const { history } = this.props;
    this.setState({ selectedSite });
    history.push(`/main/details/${selectedSite.id}`);
  };
  handleCloseSite = () => {
    const { history } = this.props;
    this.setState({ selectedSite: null });
    history.goBack();
  };

  render() {
    const { carouselSiteIndex, selectedSite } = this.state;
    return (
      <MainScreen className={styles.rockabillyMain}>
        <TopTitle className={styles.rockabillyTitle} imageURL={titleImage} />
        <Route
          exact
          path={ROUTES.MAINSCREEN}
          render={() => (
            <Fragment>
              <Intro
                className={styles.rockabillyIntro}
                textClassName={styles.rockabillyIntroText}
                detailsClassName={styles.rockabillyIntroDetails}
                intro="Scroll below to learn about the local folks from the rockabilly scene."
                details="Northeast Arkansas was home to many rockabilly musicians, from one-hit wonders to performers who made their entire careers in the music industry. All of them contributed to a revolutionary sound that transformed the world of music and gave rise to rock and roll. "
              />
              <RockabillyCarousel
                siteTapped={this.handleSelection}
                siteChanged={this.handleSiteChanged}
                selectedSiteIndex={carouselSiteIndex}
              />
            </Fragment>
          )}
        />
        <Route
          exact
          path={ROUTES.DETAILS}
          children={({ match }) => (
            <RockabillyArtistDetails
              isOpen={match && match.isExact}
              selectedSite={selectedSite}
              onCloseSite={this.handleCloseSite}
            />
          )}
        />
      </MainScreen>
    );
  }
}

export default withRouter(RockabillyMainScreen);
