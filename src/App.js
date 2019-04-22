import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as Routes from './pages';
import Navbar from './js/navbar';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
          <Switch>
            {
              Object.values(Routes).map((Component, key) => (
                <Route { ...Component.routerProps } key={ key } render={(props) => (
                  <Component {...props} set={ this.set } history={this.props.history} />
                )}/>
              ))
            }
          </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
