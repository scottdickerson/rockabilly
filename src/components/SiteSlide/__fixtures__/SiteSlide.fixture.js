import SiteSlide from "../SiteSlide";
import billyLeeRileySrc from "../../../containers/RockabillyCarousel/img/234x234-BillyLeeRiley.png";

export default {
  component: SiteSlide,
  props: {
    onClick: id => console.log(`clicked! ${id}`),
    id: "myid",
    thumbnail: billyLeeRileySrc,
    name: "Billy Lee Riley"
  }
};
