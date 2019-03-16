import SiteCarousel from "../SiteCarousel";
import { mapDataToImagesAndAudio } from "../../../utils/dataFormatterFunctions";

import localArtists from "../../../data/LocalLegends.json";

const sites = mapDataToImagesAndAudio(localArtists);

export default {
  component: SiteCarousel,
  props: {
    sites,
    siteTapped: site => console.log(`tapped Site: ${JSON.stringify(site)}`),
    siteChanged: site => console.log(`changed Site: ${JSON.stringify(site)}`),
    selectedSiteIndex: 2
  }
};
