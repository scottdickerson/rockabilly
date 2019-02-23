import React from "react";
import classnames from "classnames";

import styles from "./MainScreen.module.css";

const MainScreen = props => {
  return (
    <div className={classnames(styles.mainScreen, props.className)}>
      {props.children}
    </div>
  );
};

export default MainScreen;
