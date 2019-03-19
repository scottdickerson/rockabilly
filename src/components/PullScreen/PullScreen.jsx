import React from "react";
import PropTypes from "prop-types";
import { ROUTES } from "../../constants/constants";
import { withRouter } from "react-router";
import styles from "./PullScreen.module.css";

class PullScreen extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
  };

  render() {
    const { children } = this.props;
    return (
      <div className={styles.pullScreen} onClick={this.showSelection}>
        <div className={styles.titleSection}>
         
          {children}
        </div>
      </div>
    );
  }
}

export default withRouter(PullScreen);
