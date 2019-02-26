import RockabillyMainScreen from "../RockabillyMainScreen";
import billyLeeRileySrc from "../../RockabillyCarousel/img/234x234-BillyLeeRiley.png";

export default {
  component: RockabillyMainScreen,
  props: {
    selectedSite: {
      id: 0,
      name: "Billy Lee Riley",
      thumbnail: billyLeeRileySrc
    }
  },
  url: "/main"
};
