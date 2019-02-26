import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import styles from "./RockabillyAudio.module.css";

import toggleButton from "./img/03InternalPage-ListenButton@2x.png";

const propTypes = {
  src: PropTypes.string.isRequired,
  songTitle: PropTypes.node.isRequired,
  writtenBy: PropTypes.node.isRequired,
  performedBy: PropTypes.node.isRequired
};

const RockabillyAudio = ({
  src,
  songTitle,
  writtenBy,
  performedBy,
  ...others
}) => {
  const credits = (
    <div className={styles.credits}>
      <div>{songTitle}</div>
      <div>Written by: {writtenBy}</div>
      <div>Performed by: {performedBy}</div>
    </div>
  );
  return (
    <AudioPlayer
      {...others}
      loop
      toggleButton={toggleButton}
      credits={credits}
      soundFile={src}
    />
  );
};

RockabillyAudio.propTypes = propTypes;

export default RockabillyAudio;
