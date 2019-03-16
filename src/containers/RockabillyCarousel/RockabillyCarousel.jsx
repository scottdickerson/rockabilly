import React from "react";
import SiteCarousel from "../../components/SiteCarousel/SiteCarousel";
import artists from "../../data/LocalLegends.json";
import { mapDataToImagesAndAudio } from "../../utils/dataFormatterFunctions";

const RockabillyCarousel = ({ ...props }) => (
  <SiteCarousel {...props} sites={mapDataToImagesAndAudio(artists)} />
);

export default RockabillyCarousel;
