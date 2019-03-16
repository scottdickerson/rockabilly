import RockabillyMainScreen from "../RockabillyMainScreen";
import { mapDataToImagesAndAudio } from "../../../utils/dataFormatterFunctions";

import localArtists from "../../../data/LocalLegends.json";

const sites = mapDataToImagesAndAudio(localArtists);
export default {
  component: RockabillyMainScreen,
  props: {
    selectedSite: sites[0]
  },
  url: "/main"
};
