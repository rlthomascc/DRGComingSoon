/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class DeleteListings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          location: false,
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
    
      handleDelete(e) {
        axios.post("/deletelisting", { id: e })
        .then(e => {
            this.setState({
                location: true
            })
        })
        .catch(err => console.log(err, 'ERRRRR'))
      }

      descriptionLength(e){
        this.setState({
          description: e
        })
      }
    
      deleteTable(){
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
              <table className="table table-striped table-sm table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
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
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {this.state.listings.map((e, i) => (
                  <tr>
                    <td>{i}</td>
                    <td id={i}>{e.address}</td>
                    {e.desc.length > 20 && this.state.description !== e._id ? <td>{e.desc.slice(0,20) + "..."}  <a href="#/delete-listing" onClick={() => this.descriptionLength(e._id)}>more</a></td> : this.state.description === e._id  ? <td>{e.desc} <a href="#/delete-listing" onClick={() => this.descriptionLength("")}>less</a></td> : <td>{e.desc}</td>}
                    <td id={i}>{e.price}</td>
                    <td id={i}>{e.eta}</td>
                    <td id={i}>{e.year}</td>
                    <td id={i}>{e.sqft}</td>
                    <td id={i}>{e.bed}</td>
                    <td id={i}>{e.bath}</td>
                    {e.photoLink.length > 0 ? <td><a href={e.photoLink}>photos</a></td> : <td></td>}
                    <td id={i}>{e.agent}</td>
                    <td id={i}><input type="button" className="btn btn-danger" id={e.id} onClick={() => this.handleDelete(e._id)} value="Delete"/></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          )
        }
      }

  render() {
      if (this.state.location === false){
          return (
              <div>
                <Navbar />
                {this.deleteTable()}
                </div>
            );
        }
        else {
            return <Redirect to="/"/>
        }
    }
}

export default DeleteListings;
