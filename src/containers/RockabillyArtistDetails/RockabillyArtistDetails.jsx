import React, { Fragment } from "react";
import ArtistSchema from "../../schemas/artist";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import SitePhoto from "../../components/SitePhoto/SitePhoto";
import Details from "../../components/Details/Details";
import RockabillyAudio from "../RockabillyAudio/RockabillyAudio";

const propTypes = {
  selectedSite: ArtistSchema.isRequired
};

const RockabillyArtistDetails = ({
  selectedSite: { name, description, detailImage, audio }
}) => {
  return (
    <SiteDetails
      leftPane={<SitePhoto />}
      rightPane={
        <Fragment>
          <Details />
          <RockabillyAudio />
        </Fragment>
      }
    />
  );
};

RockabillyArtistDetails.propTypes = propTypes;

export default RockabillyArtistDetails;
