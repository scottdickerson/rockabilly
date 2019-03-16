import React from "react";
import PullScreen from "../PullScreen";
import introBanner from "../img/01PullScreen-IntroBanner@2x.png";

export default [
  {
    component: PullScreen,
    name: "embedded title",
    props: {
      children: <img src={introBanner} height="330px" alt="banner" />
    },
    url: "/"
  },
  {
    component: PullScreen,
    name: "dynamic title",
    props: {
      title: "Arkansas State University Presents",
      children: <img src={introBanner} height="330px" alt="banner" />
    },
    url: "/"
  }
];
