import React from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import Intro from "../../components/Intro/Intro";
import TopTitle from "../../components/TopTitle/TopTitle";
import titleImage from "./img/02CarouselBanner@2x.png";
import RockabillyCarousel from "../RockabillyCarousel/RockabillyCarousel";

import { withRouter } from "react-router";
import { ROUTES } from "../../constants/constants";
import ArtistSchema from "../../schemas/artist";
import styles from "./RockabillyMainScreen.module.css";

class RockabillyMainScreen extends React.Component {
  static propTypes = {
    selectedSite: ArtistSchema
  };
  handleSelection = index => {
    const { history } = this.props;
    switch (index) {
      case 0:
        history.push(ROUTES.CYPHER);
        break;
      case 1:
        history.push(ROUTES.TELEGRAM);
        break;
      case 2:
        history.push(ROUTES.COMPUTING);
        break;
      default:
        return;
    }
  };
  render() {
    const { selectedSite } = this.props;
    return (
      <MainScreen className={styles.rockabillyMain}>
        <TopTitle className={styles.rockabillyTitle} imageURL={titleImage} />
        <Intro
          className={styles.rockabillyIntro}
          textClassName={styles.rockabillyIntroText}
          detailsClassName={styles.rockabillyIntroDetails}
          intro="Rockabilly is important!"
          details="It's an Arkansas tradition y'all!"
        />
        <RockabillyCarousel
          siteTapped={this.handleSelection}
          siteChanged={site =>
            console.log(`site changed: ${JSON.stringify(site)}`)
          }
          selectedSite={selectedSite}
        />
      </MainScreen>
    );
  }
}

export default withRouter(RockabillyMainScreen);
