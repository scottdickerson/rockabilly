import SiteSlide from "../SiteSlide";

import localArtists from "../../../data/LocalLegends.json";

export default {
  component: SiteSlide,
  props: {
    onClick: id => console.log(`clicked! ${id}`),
    ...localArtists[0]
  }
};
