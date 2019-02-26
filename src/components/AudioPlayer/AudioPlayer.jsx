import React, { useState } from "react";
import PropTypes from "prop-types";
import Sound from "react-sound";
import styles from "./AudioPlayer.module.css";
import classnames from "classnames";

const propTypes = {
  toggleButton: PropTypes.node,
  autoPlay: PropTypes.bool,
  soundFile: PropTypes.string,
  credits: PropTypes.node,
  className: PropTypes.string
};

const AudioPlayer = ({
  soundFile,
  autoPlay,
  toggleButton,
  credits,
  className,
  ...others
}) => {
  const [playing, setPlaying] = useState(false);

  function onClick() {
    setPlaying(state => !state);
  }
  return (
    <div className={classnames(styles.audioPlayer, className)}>
      <img
        src={toggleButton}
        className={styles.image}
        alt="Play"
        onClick={onClick}
      />
      <Sound
        url={soundFile}
        playStatus={autoPlay || playing ? "PLAYING" : "PAUSED"}
        {...others}
      />
      <div className={styles.credits}>{credits}</div>
    </div>
  );
};

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
