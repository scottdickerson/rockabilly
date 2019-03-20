import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router";
import { ROUTES } from "./constants/constants";
import RockabillyPullScreen from "./containers/RockabillyPullScreen/RockabillyPullScreen";
import RockabillyMainScreen from "./containers/RockabillyMainScreen/RockabillyMainScreen";

class App extends React.Component {
  static propTypes = {
    resetDelay: PropTypes.number
  };
  static defaultProps = {
    resetDelay: 30000
  };
  componentDidMount() {
    this.touchListener = document.body.addEventListener(
      "touchstart",
      this.resetTimer
    );
    this.clickListener = document.body.addEventListener(
      "click",
      this.resetTimer
    );
  }
  resetTimer = () => {
    const { resetDelay } = this.props;
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(this.reset, resetDelay);
  };
  reset = () => {
    const { history } = this.props;
    history.push(ROUTES.PULLSCREEN);
    window.location.reload(); // reload the whole page
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={ROUTES.PULLSCREEN}
            component={RockabillyPullScreen}
          />
          <Route path={ROUTES.MAINSCREEN} component={RockabillyMainScreen} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
