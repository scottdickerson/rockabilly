import React from "react";
import PropTypes from "prop-types";
import { ROUTES } from "../../constants/constants";
import { withRouter } from "react-router";
import styles from "./PullScreen.module.css";

class PullScreen extends React.Component {
  static propTypes = {
    /** Optional string title to be rendered within the call to action, the title might be embedded within the children image */
    title: PropTypes.string,
    children: PropTypes.node.isRequired
  };
  showSelection = () => {
    const { history } = this.props;
    history.push(ROUTES.MAINSCREEN);
  };

  render() {
    const { children, title } = this.props;
    return (
      <div className={styles.pullScreen} onClick={this.showSelection}>
        <div className={styles.titleSection}>
          {title ? <div className={styles.title}>{title}</div> : null}
          {children}
        </div>
      </div>
    );
  }
}

export default withRouter(PullScreen);
