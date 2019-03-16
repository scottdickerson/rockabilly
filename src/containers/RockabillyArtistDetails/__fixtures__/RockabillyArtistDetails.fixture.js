import RockabillyArtistDetails from "../RockabillyArtistDetails";

import localArtists from "../../../data/LocalLegends.json";

export default [
  {
    component: RockabillyArtistDetails,
    name: "vertical image",
    props: {
      selectedSite: localArtists[0],
      isOpen: true,
      onCloseSite: () => console.log("close the site!")
    }
  },
  {
    component: RockabillyArtistDetails,
    name: "horizontal image",
    props: {
      selectedSite: localArtists[1],
      isOpen: true,
      onCloseSite: () => console.log("close the site!")
    }
  }
];
