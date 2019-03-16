import SitePhoto from "../SitePhoto";

import artists from "../../../data/LocalLegends.json";

export default {
  component: SitePhoto,
  props: {
    ...artists[0].detailImage
  }
};
