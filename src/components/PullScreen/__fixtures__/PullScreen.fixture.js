import React from "react";
import PullScreen from "../PullScreen";
import introBanner from "../img/01PullScreen-IntroBanner@2x.png";

export default [
  {
    component: PullScreen,
    name: "normal",
    props: {
      children: <img src={introBanner} height="330px" alt="banner" />
    },
    url: "/"
  },
];
