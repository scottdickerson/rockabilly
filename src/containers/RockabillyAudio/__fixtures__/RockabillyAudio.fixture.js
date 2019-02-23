import RockabillyAudio from "../RockabillyAudio";
import billySong from "../mp3s/01 trouble bound biley lee riley.mp3";

export default {
  component: RockabillyAudio,
  props: {
    src: billySong,
    songTitle: "Trouble Bound, Sun Records, 1956",
    writtenBy: "Billy Lee Riley",
    performedBy: "Billy Lee Riley"
  }
};
