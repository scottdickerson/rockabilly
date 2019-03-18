import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import ReactHTMLParser from "react-html-parser";
import styles from "./RockabillyAudio.module.css";
import glowingButton from "./animation/pressToListen_halfsize_glow.json";
import playingButton from "./animation/pressToListen_halfsize_playingNote.json";
import LottieControl from "../../components/LottieControl/LottieControl";
import listenGlow from "./animation/images/listen_glow.png";

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
      <div>{ReactHTMLParser(songTitle)}</div>
      <div>Written by: {writtenBy}</div>
      <div>Performed by: {performedBy}</div>
    </div>
  );
  return (
    <AudioPlayer
      {...others}
      loop
      renderToggleButton={isPlaying =>
        !isPlaying ? (
          <LottieControl
            animationData={glowingButton}
            imageMap={[{ name: "listen_glow.png", path: listenGlow }]}
            isLooping
          />
        ) : (
          <LottieControl animationData={playingButton} isLooping />
        )
      }
      credits={credits}
      soundFile={src}
    />
  );
};

RockabillyAudio.propTypes = propTypes;

export default RockabillyAudio;
