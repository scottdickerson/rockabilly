import React, { Fragment } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import ArtistSchema from "../../schemas/artist";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import SitePhoto from "../../components/SitePhoto/SitePhoto";
import Details from "../../components/Details/Details";
import RockabillyAudio from "../RockabillyAudio/RockabillyAudio";
import styles from "./RockabillyArtistDetails.module.css";
import dividerSrc from "./img/03InternalPage-BlueDividerLines@2x.png";

import sites from "../../data/LocalLegends.json";
import { mapDataToImagesAndAudio } from "../../utils/dataFormatterFunctions";
const artists = mapDataToImagesAndAudio(sites);

const propTypes = {
  selectedSite: PropTypes.shape(ArtistSchema),
  isOpen: PropTypes.bool,
  onCloseSite: PropTypes.func.isRequired
};

const RockabillyArtistDetails = ({
  selectedSite,
  isOpen,
  onCloseSite,
  match
}) => {
  const { name, description, detailImage, audio } =
    // If I'm not passed a selectedSite, I should derive it from my current URL match
    selectedSite || (match && match.params) ? artists[match.params.id] : {};
  return (
    <SiteDetails
      isOpen={isOpen || false}
      onCloseSite={onCloseSite}
      className={styles.siteDetails}
      leftPane={
        detailImage ? (
          <SitePhoto
            src={detailImage.src}
            alt={detailImage.description}
            caption={
              <div className={styles.caption}>
                <div>{detailImage.description}</div>
                <div>{detailImage.photoCredit}</div>
              </div>
            }
          />
        ) : (
          ""
        )
      }
      rightPane={
        <Fragment>
          {name ? (
            <Details
              detailsClassName={styles.details}
              detailsTitleClassName={styles.detailsTitle}
              detailsTextClassName={styles.detailsText}
              separatorImgSrc={dividerSrc}
              title={name}
              details={description}
            />
          ) : null}
          {audio ? (
            <RockabillyAudio {...audio} className={styles.audioPlayer} />
          ) : null}
        </Fragment>
      }
    />
  );
};

RockabillyArtistDetails.propTypes = propTypes;

export default withRouter(RockabillyArtistDetails);
