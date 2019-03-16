import RockabillyMainScreen from "../RockabillyMainScreen";

import localArtists from "../../../data/LocalLegends.json";

export default {
  component: RockabillyMainScreen,
  props: {
    selectedSite: localArtists[0]
  },
  url: "/main"
};
