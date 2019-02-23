import React from "react";
import AudioPlayer from "../AudioPlayer";
import billySong from "../../../containers/RockabillyAudio/mp3s/01 trouble bound biley lee riley.mp3";
import toggleButton from "../../../containers/RockabillyAudio/img/03InternalPage-ListenButton@2x.png";

export default [
  {
    component: AudioPlayer,
    name: "normal",
    props: {
      soundFile: billySong,
      toggleButton,
      credits: <div>Red Headed Woman, Sun Records, 1956</div>
    }
  },
  {
    component: AudioPlayer,
    name: "autoplay",
    props: {
      autoPlay: true,
      soundFile: billySong,
      toggleButton,
      credits: <div>Red Headed Woman, Sun Records, 1956</div>
    }
  }
];
