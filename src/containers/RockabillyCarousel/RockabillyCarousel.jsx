import React from "react";
import SiteCarousel from "../../components/SiteCarousel/SiteCarousel";
import artists from "../../data/LocalLegends.json";

const RockabillyCarousel = ({ ...props }) => (
  <SiteCarousel {...props} sites={artists} />
);

export default RockabillyCarousel;
