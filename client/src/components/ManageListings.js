/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class ManageListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    var value = e.target;

    axios.post('/addlisting', {
      address: value.address.value,
      desc: value.desc.value,
      sqft: value.sqft.value,
      bed: value.bed.value,
      bath: value.bath.value,
      photoLink: value.photoLink.value,
      agent: value.agent.value,
      price: value.price.value,
      eta: value.eta.value,
      year: value.year.value
    })
    .then(e => {
      console.log(e)
      location.reload();
    })
    .catch(e => {
      console.log(e, " ERRRRRRRR");
      alert("Error saving document.. Please try again")
    })
  }

  homepage() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St. Modesto, CA"/>
          </div>
          <div className="form-group">
            <label>Brief Description</label>
            <input type="text" className="form-control" id="desc" placeholder="This home has a pool and solar"/>
          </div>
          <div className="row">
            <div className="col">
              <label>Price</label>
              <input type="text" className="form-control" id="price" placeholder="$350000"/>
            </div>
            <div className="col">
              <label>Live Date / ETA</label>
              <input type="text" className="form-control" id="eta" placeholder="1/1/20" />
            </div>
            <div className="col">
              <label>Year</label>
              <input type="number" className="form-control" id="year" placeholder="2020"/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col">
              <label>Square Feet</label>
              <input type="number" className="form-control" id="sqft" placeholder="1123"/>
            </div>
            <div className="col">
              <label>Bed</label>
              <input type="text" className="form-control" id="bed" placeholder="3"/>
            </div>
            <div className="col">
              <label>Bath</label>
              <input type="text" className="form-control" id="bath" placeholder="2"/>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Photo Link</label>
              <input type="text" className="form-control" id="photoLink" placeholder="http://dropbox.com"/>
            </div>
            <div className="col">
              <label>Agent</label>
              <input type="text" className="form-control" id="agent" placeholder="John Doe"/>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

  render() {
      return (
        <div>
          <Navbar />
          {this.homepage()}
        </div>
      );
    }
}

export default ManageListings;
