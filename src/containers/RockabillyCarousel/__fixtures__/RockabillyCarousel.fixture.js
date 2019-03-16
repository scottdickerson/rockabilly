import RockabillyCarousel from "../RockabillyCarousel";
import artist from "../../../data/LocalLegends.json";

export default {
  component: RockabillyCarousel,
  props: {
    siteTapped: site => {
      console.log(`site tapped: ${JSON.stringify(site)}`);
    },
    siteChanged: site => {
      console.log(`site changed: ${JSON.stringify(site)}`);
    },
    selectedSite: {
      id: 0,
      thumbnail: artist[0].thumbnail,
      name: "Billy Lee Riley"
    }
  }
};
