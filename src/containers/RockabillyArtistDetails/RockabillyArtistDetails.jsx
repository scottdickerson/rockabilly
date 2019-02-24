import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ArtistSchema from "../../schemas/artist";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import SitePhoto from "../../components/SitePhoto/SitePhoto";
import Details from "../../components/Details/Details";
import RockabillyAudio from "../RockabillyAudio/RockabillyAudio";
import styles from "./RockabillyArtistDetails.module.css";

const propTypes = {
  selectedSite: PropTypes.shape(ArtistSchema).isRequired
};

const RockabillyArtistDetails = ({
  selectedSite: { name, description, detailImage, audio }
}) => {
  return (
    <SiteDetails
      isOpen
      leftPane={
        detailImage ? (
          <SitePhoto
            src={detailImage.src}
            caption={
              <div className={styles.caption}>
                <div>{detailImage.description}</div>
                <div>{detailImage.photoCredit}</div>
              </div>
            }
          />
        ) : null
      }
      rightPane={
        <Fragment>
          <Details title={name} details={description} />
          {audio ? <RockabillyAudio {...audio} /> : null}
        </Fragment>
      }
    />
  );
};

RockabillyArtistDetails.propTypes = propTypes;

export default RockabillyArtistDetails;
