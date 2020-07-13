/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Route, HashRouter, BrowserRouter, Redirect, Router,
} from 'react-router-dom';
import Home from './components/Home';
import ManageListings from './components/ManageListings';
import EditListings from './components/EditLisings';
import DeleteListing from './components/DeleteListings';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  changeAddress(address) {
    this.setState({
      address,
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Route
              path="/"
              exact
              strict
              render={() => (
                <Home changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/add-new-listing"
              exact
              strict
              render={() => (
                <ManageListings address={this.state.address} />
              )}
            />
          </div>
          {/* <div>
            <Route
              path="/edit-listing"
              exact
              strict
              render={() => (
                <EditListings address={this.state.address} />
              )}
            />
          </div> */}
          <div>
            <Route
              path="/delete-listing"
              exact
              strict
              render={() => (
                <DeleteListing address={this.state.address} />
              )}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
