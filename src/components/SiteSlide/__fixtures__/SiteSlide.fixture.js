import SiteSlide from "../SiteSlide";
import { mapDataToImagesAndAudio } from "../../../utils/dataFormatterFunctions";

import localArtists from "../../../data/LocalLegends.json";

const sites = mapDataToImagesAndAudio(localArtists);
export default {
  component: SiteSlide,
  props: {
    onClick: id => console.log(`clicked! ${id}`),
    ...sites[0]
  }
};
