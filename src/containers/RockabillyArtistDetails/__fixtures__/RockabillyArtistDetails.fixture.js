import RockabillyArtistDetails from "../RockabillyArtistDetails";
import { mapDataToImagesAndAudio } from "../../../utils/dataFormatterFunctions";

import localArtists from "../../../data/LocalLegends.json";

const artists = mapDataToImagesAndAudio(localArtists);
export default [
  {
    component: RockabillyArtistDetails,
    name: "vertical image",
    props: {
      selectedSite: artists[0],
      isOpen: true,
      onCloseSite: () => console.log("close the site!")
    }
  },
  {
    component: RockabillyArtistDetails,
    name: "horizontal image",
    props: {
      selectedSite: artists[1],
      isOpen: true,
      onCloseSite: () => console.log("close the site!")
    }
  }
];
