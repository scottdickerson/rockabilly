import RockabillyArtistDetails from "../RockabillyArtistDetails";
import billyRileySrc from "../../RockabillyCarousel/img/234x234-BillyLeeRiley.png";
import billyRileyDetails from "../img/616x507-BillyLeeRiley.png";
import billyRileyAudio from "../../RockabillyAudio/mp3s/01 trouble bound biley lee riley.mp3";
import bobbyBrownSrc from "../img/616x507-BobbyBrown.png";

const artists = [
  {
    id: 0,
    name: "Billy Lee Riley",
    description:
      "In 1933, Billy Lee Riley was born the son of a sharecropper in Pocahontas, where he learned to play the guitar from black farmworkers. He signed with Sun Records in 1956 and released <i>Trouble Bound</i>, with <i>Rock with Me Baby</i> on the B side. Riley followed up with <i>Red Hot</i> in 1958, and while the record had the potential to be a hit, it never found commercial success because Sun chose to focus on promoting Jerry Lee Lewis instead. Riley went on to release several more records, but they also failed to find a widespread audience. He eventually moved to Los Angeles, where he played with the likes of Dean Martin and The Beach Boys. In a twist of fate, Riley experienced newfound popularity in the late 1970s with the Rockabilly Revival in Europe and released new records in the 1990s and 2000s. Riley passed away on August 2, 2009 in Jonesboro. ",
    thumbnail: billyRileySrc,
    detailImage: {
      src: billyRileyDetails,
      description: "Billy Lee Riley, date unknown",
      photoCredit: "Art Meripol"
    },
    audio: {
      src: billyRileyAudio,
      songTitle: "<i>Trouble Bound</i>, Sun Records, 1956",
      writtenBy: "Billy Lee Riley",
      performedBy: "Billy Lee Riley"
    }
  },
  {
    id: 1,
    name: "Billy Lee Riley",
    description:
      "In 1933, Billy Lee Riley was born the son of a sharecropper in Pocahontas, where he learned to play the guitar from black farmworkers. He signed with Sun Records in 1956 and released <i>Trouble Bound</i>, with Rock with Me Baby on the B side. Riley followed up with Red Hot in 1958, and while the record had the potential to be a hit, it never found commercial success because Sun chose to focus on promoting Jerry Lee Lewis instead. Riley went on to release several more records, but they also failed to find a widespread audience. He eventually moved to Los Angeles, where he played with the likes of Dean Martin and The Beach Boys. In a twist of fate, Riley experienced newfound popularity in the late 1970s with the Rockabilly Revival in Europe and released new records in the 1990s and 2000s. Riley passed away on August 2, 2009 in Jonesboro. ",
    thumbnail: billyRileySrc,
    detailImage: {
      src: bobbyBrownSrc,
      description: "Billy Lee Riley, date unknown",
      photoCredit: "Art Meripol"
    },
    audio: {
      src: billyRileyAudio,
      songTitle: "Trouble Bound, Sun Records, 1956",
      writtenBy: "Billy Lee Riley",
      performedBy: "Billy Lee Riley"
    }
  }
];

export default [
  {
    component: RockabillyArtistDetails,
    name: "vertical image",
    props: {
      selectedSite: artists[0],
      onCloseSite: () => console.log("close the site!")
    }
  },
  {
    component: RockabillyArtistDetails,
    name: "horizontal image",
    props: {
      selectedSite: artists[1],
      onCloseSite: () => console.log("close the site!")
    }
  }
];
