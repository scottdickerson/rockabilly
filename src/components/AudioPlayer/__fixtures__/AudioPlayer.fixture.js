import React from "react";
import AudioPlayer from "../AudioPlayer";
import billySong from "./mp3s/01 Billy Lee Riley Flying Saucer Rock and Roll.mp3";
import LottieControl from "../../LottieControl/LottieControl";
import glowingButton from "./animation/pressToListen_halfsize_glow.json";
import playingButton from "./animation/pressToListen_halfsize_playingNote.json";
import listenGlow from "./animation/images/listen_glow.png";

export default [
  {
    component: AudioPlayer,
    name: "normal",
    props: {
      soundFile: billySong,
      credits: <div>Red Headed Woman, Sun Records, 1956</div>
    }
  },
  {
    component: AudioPlayer,
    name: "autoplay",
    props: {
      autoPlay: true,
      soundFile: billySong,
      credits: <div>Red Headed Woman, Sun Records, 1956</div>
    }
  },
  {
    component: AudioPlayer,
    name: "custom play button",
    props: {
      soundFile: billySong,
      renderToggleButton: isPlaying =>
        !isPlaying ? (
          <LottieControl
            animationData={glowingButton}
            imageMap={[{ name: "listen_glow.png", path: listenGlow }]}
            isLooping
          />
        ) : (
          <LottieControl animationData={playingButton} isLooping />
        ),
      credits: <div>Red Headed Woman, Sun Records, 1956</div>
    }
  }
];
