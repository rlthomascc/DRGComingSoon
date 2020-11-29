/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import Navbar from './Navbar';
import ManageListings from './ManageListings';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editWindow: false,
      address: '',
      description: '',
      editObject: {},
      listings: [],
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    axios.get("/getlistings")
    .then(e => {
      this.setState({
        listings: e.data
      });
    })
    .catch(err => console.log(err, 'ERRRRRRR'))
  }

  handleSubmit(e) {
    e.preventDefault();
    var v = e.target;
    var l = this.state.editObject;
    var updated = {};
    updated._id = l._id;
    v.address.value.length > 0 ? updated.address = v.address.value : updated.address = l.address;
    v.desc.value.length > 0 ? updated.desc = v.desc.value : updated.desc = l.desc;
    v.price.value.length > 0 ? updated.price = v.price.value : updated.price =  l.price;
    v.eta.value.length > 0 ? updated.eta = v.eta.value : updated.eta = l.eta;
    v.year.value.length > 0 ? updated.year = v.year.value : updated.year = l.year;
    v.sqft.value.length > 0 ? updated.sqft = v.sqft.value : updated.sqft = l.sqft;
    v.bed.value.length > 0 ? updated.bed = v.bed.value : updated.bed = l.bed;
    v.bath.value.length > 0 ? updated.bath = v.bath.value : updated.bath = l.bath;
    v.photoLink.value.length > 0 ? updated.photoLink = v.photoLink.value : updated.photoLink = l.photoLink;
    v.agent.value.length > 0 ? updated.agent = v.agent.value : updated.agent = l.agent;
    v.premarket.value.length > 0 ? updated.premarket = v.premarket.value : updated.premarket = l.premarket;

    for (var prop in updated){
      if (updated[prop] === undefined){
        updated[prop] = "";
      }
    }

    axios.post('/editlisting', updated)
    .then(e => {
      console.log(e)
      location.reload();
    })
    .catch(e => {
      console.log(e, " ERRRRRRRR");
      alert("Error saving document.. Please try again")
    })
  }

  descriptionLength(e){
    this.setState({
      description: e
    })
  }

  refresh() {
    setTimeout(() => {
      window.location.reload()
    }, 300000)
  }

  edit(e) {
    this.state.listings.map((elem, i) => {
      if(elem._id === e){
        this.setState(
          { 
            editWindow: true, 
            editObject: elem 
          })
      } else {
        null
      }
    });
    //send this to another page now so they can update the listing.
  }

  comingSoons(){
    this.refresh();
    if (this.state.listings.length == 0) {
      return (
        <div className="coming-soon-table">
          <p>loading...</p>
        </div>
      )
    }
    else {
      return (
        <div className="coming-soon-table">
          <table className="table table-striped table-hover table-dark">
            <thead>
              <tr>
                <th score="col">#</th>
                <th scope="col">Address</th>
                <th scope="col">Description / Showing Notes</th>
                <th scope="col">Price</th>
                <th scope="col">Live Date</th>
                <th scope="col">Year</th>
                <th scope="col">Sq. Ft.</th>
                <th scope="col">Bed</th>
                <th scope="col">Bath</th>
                <th scope="col">Photos</th>
                <th scope="col">Offer Pre Market</th>
                <th scope="col">Agent</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            {this.state.listings.map((e, i) => (
              <tr>
                <td >{i}</td>
                <td >{e.address}</td>
                {e.desc.length > 20 && this.state.description !== e._id ? <td>{e.desc.slice(0,20) + "..."}  <a href="#" onClick={() => this.descriptionLength(e._id)}>more</a></td> : this.state.description === e._id  ? <td>{e.desc} <a href="#" onClick={() => this.descriptionLength("")}>less</a></td> : <td>{e.desc}</td>}
                <td id="price">{e.price}</td>
                <td>{e.eta}</td>
                <td>{e.year}</td>
                <td>{e.sqft}</td>
                <td>{e.bed}</td>
                <td>{e.bath}</td>
                {e.photoLink.length > 0 ? <td><a href={e.photoLink}>photos</a></td> : <td></td>}
                <td id={i}>{e.premarket}</td>
                <td>{e.agent}</td>
                <td><a className="btn-sm btn-primary" onClick={() => this.edit(e._id)}>Edit</a></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )
    }
  }

  editListing() {
    var l = this.state.editObject;
    return (
      <div className="coming-soon-table">
        <div className="editListing">
          <div className="flex-row p-1">
            <p className="h3 font-weight-bold text-primary text-center">Listing Details:</p>
            <p className="text-light text-center"><b>Address: </b> {l.address}</p>
            <p className="text-light text-center"><b>Description: </b> {l.description}</p>
            <p className="text-light text-center"><b>Price: </b> {l.price}</p>
            <p className="text-light text-center"><b>Live Date: </b> {l.eta}</p>
            <p className="text-light text-center"><b>Year: </b> {l.year}  |  <b>Sq. Ft.: </b> {l.sqft}</p>
            <p className="text-light text-center"><b>Bed: </b> {l.bed}  |  <b>Bath: </b> {l.bath}</p>
            <p className="text-light text-center"><b>Photo Link: </b> {l.photoLink}</p>
            <p className="text-light text-center"><b>Pre Market: </b> {l.premarket}  |  <b>Agent: </b> {l.agent}</p>
          </div>

          <hr />
          <div className="edit-form-container">
            <p className="h4 font-weight-bold text-warning text-center">Only Edit Fields You Want Changed.</p>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label className="text-light">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St. Modesto, CA"/>
              </div>
              <div className="form-group">
                <label className="text-light">Description / Show Notes</label>
                <input type="text" className="form-control" id="desc" placeholder="This home has a pool and solar"/>
              </div>
              <div className="row">
                <div className="col">
                  <label className="text-light">Price</label>
                  <input type="text" className="form-control" id="price" placeholder="$350000"/>
                </div>
                <div className="col">
                  <label className="text-light">Live Date / ETA</label>
                  <input type="text" className="form-control" id="eta" placeholder="1/1/20" />
                </div>
                <div className="col">
                  <label className="text-light">Year</label>
                  <input type="number" className="form-control" id="year" placeholder="2020"/>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <label className="text-light">Square Feet</label>
                  <input type="number" className="form-control" id="sqft" placeholder="1123"/>
                </div>
                <div className="col">
                  <label className="text-light">Bed</label>
                  <input type="text" className="form-control" id="bed" placeholder="3"/>
                </div>
                <div className="col">
                  <label className="text-light">Bath</label>
                  <input type="text" className="form-control" id="bath" placeholder="2"/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label className="text-light">Photo Link</label>
                  <input type="text" className="form-control" id="photoLink" placeholder="http://dropbox.com"/>
                </div>
                <div className="col">
                  <label className="text-light">Agent</label>
                  <input type="text" className="form-control" id="agent" placeholder="John Doe"/>
                </div>
                <div className="col">
                  <label className="text-light">Sell Pre Market?</label>
                  {/* <input type="text" className="form-control" id="agent" placeholder="John Doe"/> */}
                  <select className="form-control" id="premarket">
                    <option>...</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                  </select>
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.editWindow === false){
      return (
        <div>
          <Navbar />
          {this.comingSoons()}
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          {this.editListing()}
        </div>
      );
    }
  }
}


export default Home;
