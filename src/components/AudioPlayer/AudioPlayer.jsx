import React, { useState } from "react";
import PropTypes from "prop-types";
import Sound from "react-sound";
import styles from "./AudioPlayer.module.css";

const propTypes = {
  toggleButton: PropTypes.node,
  autoPlay: PropTypes.bool,
  soundFile: PropTypes.string,
  credits: PropTypes.node
};

const AudioPlayer = ({ soundFile, autoPlay, toggleButton, credits }) => {
  const [playing, setPlaying] = useState(false);

  function onClick() {
    setPlaying(state => !state);
  }
  return (
    <div className={styles.audioPlayer}>
      <img
        src={toggleButton}
        className={styles.image}
        alt="Play"
        onClick={onClick}
      />
      <Sound
        url={soundFile}
        playStatus={autoPlay || playing ? "PLAYING" : "PAUSED"}
      />
      <div className={styles.credits}>{credits}</div>
    </div>
  );
};

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
