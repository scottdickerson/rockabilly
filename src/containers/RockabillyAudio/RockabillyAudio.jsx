import React from "react";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import billySong from "./mp3s/01 trouble bound biley lee riley.mp3";
import toggleButton from "./img/03InternalPage-ListenButton@2x.png";
import ArtistSchema from "../../schemas/artist";

const propTypes = {
  selectedSite: ArtistSchema
};

const RockabillyAudio = ({ selectedSite }) => {
  // TODO: Need to pull from selected Site schema
  const credits = "Red Headed Woman, Sun Records, 1956";
  return (
    <AudioPlayer
      toggleButton={toggleButton}
      credits={credits}
      soundFile={billySong}
    />
  );
};

RockabillyAudio.propTypes = propTypes;

export default RockabillyAudio;
