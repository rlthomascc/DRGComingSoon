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
      redirect: false,
      redirect2: false,
      address: '',
      description: '',
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
    this.setState({
    });
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

  comingSoons(){
    this.refresh();
    console.log(this.state)
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Address</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">ETA</th>
                <th scope="col">Year</th>
                <th scope="col">Sq. Ft.</th>
                <th scope="col">Bed</th>
                <th scope="col">Bath</th>
                <th scope="col">Photos</th>
                <th scope="col">Agent</th>
              </tr>
            </thead>
            <tbody>
            {this.state.listings.map((e, i) => (
              <tr>
                <td>{e.address}</td>
                {e.desc.length > 20 && this.state.description !== e._id ? <td>{e.desc.slice(0,20) + "..."}  <a href="#" onClick={() => this.descriptionLength(e._id)}>more</a></td> : this.state.description === e._id  ? <td>{e.desc} <a href="#" onClick={() => this.descriptionLength("")}>less</a></td> : <td>{e.desc}</td>}
                {/* <td>{e.desc}</td> */}
                <td>{e.price}</td>
                <td>{e.eta}</td>
                <td>{e.year}</td>
                <td>{e.sqft}</td>
                <td>{e.bed}</td>
                <td>{e.bath}</td>
                {e.photoLink.length > 0 ? <td><a href={e.photoLink}>photos</a></td> : <td></td>}
                <td>{e.agent}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )
    }
  }

  render() {
      return (
        <div>
          <Navbar />
          {this.comingSoons()}
        </div>
      );
    }
}


export default Home;
