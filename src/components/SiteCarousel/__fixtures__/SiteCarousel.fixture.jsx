import SiteCarousel from "../SiteCarousel";
import billyLeeRileySrc from "../../../containers/RockabillyCarousel/img/234x234-BillyLeeRiley.png";
import bobbyBrownSrc from "../../../containers/RockabillyCarousel/img/234x234-BobbyBrown.png";
import bobbyLeeSrc from "../../../containers/RockabillyCarousel/img/234x234-BobbyLeeTrammell.png";
import charlieRichSrc from "../../../containers/RockabillyCarousel/img/234x234-CharlieRich.png";
import chuckComerSrc from "../../../containers/RockabillyCarousel/img/234x234-ChuckComer.png";

const sites = [
  { id: 0, name: "Billy Lee Riley", thumbnail: billyLeeRileySrc },
  { id: 1, name: "Bobby Brown", thumbnail: bobbyBrownSrc },
  { id: 2, name: "Bobby Lee Trammell", thumbnail: bobbyLeeSrc },
  { id: 3, name: "Charlie Rich", thumbnail: charlieRichSrc },
  { id: 4, name: "Chuck Comer", thumbnail: chuckComerSrc }
];

export default {
  component: SiteCarousel,
  props: {
    sites,
    siteTapped: site => console.log(`tapped Site: ${JSON.stringify(site)}`),
    siteChanged: site => console.log(`changed Site: ${JSON.stringify(site)}`),
    selectedSiteIndex: 2
  }
};
