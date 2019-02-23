import RockabillyCarousel from "../RockabillyCarousel";
import billyLeeRileySrc from "../img/234x234-BillyLeeRiley.png";

export default {
  component: RockabillyCarousel,
  props: {
    siteTapped: site => {
      console.log(`site tapped: ${JSON.stringify(site)}`);
    },
    siteChanged: site => {
      console.log(`site changed: ${JSON.stringify(site)}`);
    },
    selectedSite: {
      id: 0,
      name: "Billy Lee Riley",
      thumbnail: billyLeeRileySrc
    }
  }
};
