import React, { useState } from "react";
import PropTypes from "prop-types";
import Sound from "react-sound";
import styles from "./AudioPlayer.module.css";
import classnames from "classnames";
import toggleButton from "./img/03InternalPage-ListenButton@2x.png";

const propTypes = {
  /** render prop that passes the current playing state to allow you to decide how to render the ToggleButton */
  renderToggleButton: PropTypes.func,
  autoPlay: PropTypes.bool,
  soundFile: PropTypes.string,
  credits: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  renderToggleButton: (state, props) => (
    <img src={toggleButton} className={styles.image} alt="Play" />
  )
};

const AudioPlayer = ({
  soundFile,
  autoPlay,
  renderToggleButton,
  credits,
  className,
  ...others
}) => {
  const [playing, setPlaying] = useState(false);

  // Figure out how to render the toggle button
  const renderedToggleButton = renderToggleButton(playing);

  function onClick() {
    setPlaying(state => !state);
  }
  return (
    <div className={classnames(styles.audioPlayer, className)}>
      {React.cloneElement(renderedToggleButton, { onClick })}
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
AudioPlayer.defaultProps = defaultProps;

export default AudioPlayer;
