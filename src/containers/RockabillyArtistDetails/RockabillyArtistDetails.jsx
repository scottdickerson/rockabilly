import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ArtistSchema from "../../schemas/artist";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import SitePhoto from "../../components/SitePhoto/SitePhoto";
import Details from "../../components/Details/Details";
import RockabillyAudio from "../RockabillyAudio/RockabillyAudio";
import styles from "./RockabillyArtistDetails.module.css";
import dividerSrc from "./img/03InternalPage-BlueDividerLines@2x.png";

const propTypes = {
  selectedSite: PropTypes.shape(ArtistSchema).isRequired,
  onCloseSite: PropTypes.func.isRequired
};

const RockabillyArtistDetails = ({
  selectedSite: { name, description, detailImage, audio },
  onCloseSite
}) => {
  return (
    <SiteDetails
      isOpen
      onCloseSite={onCloseSite}
      className={styles.siteDetails}
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
          <Details
            detailsClassName={styles.details}
            detailsTitleClassName={styles.detailsTitle}
            detailsTextClassName={styles.detailsText}
            separatorImgSrc={dividerSrc}
            title={name}
            details={description}
          />
          {audio ? (
            <RockabillyAudio {...audio} className={styles.audioPlayer} />
          ) : null}
        </Fragment>
      }
    />
  );
};

RockabillyArtistDetails.propTypes = propTypes;

export default RockabillyArtistDetails;
