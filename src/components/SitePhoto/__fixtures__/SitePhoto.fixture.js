import SitePhoto from "../SitePhoto";
import { mapDataToImagesAndAudio } from "../../../utils/dataFormatterFunctions";

import localArtists from "../../../data/LocalLegends.json";

const sites = mapDataToImagesAndAudio(localArtists);
export default {
  component: SitePhoto,
  props: {
    ...sites[0].detailImage
  }
};
