/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import Navbar from './Navbar';

class EditListings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          location: false,
          editId: "",
          edit: false,
          editObj: {},
          listings: [],
          description: ''
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
    
      handleEdit(e) {
        var editObj = {};
        this.state.listings.forEach((elem, i) => {
            if (elem._id === e){
                editObj = elem
            }
        })
        this.setState({
            editId: e,
            edit: true,
            editObj: editObj
        })
      }

      handleEditSubmit(e){
          e.preventDefault();
          console.log("here")
      }

      closeEdit(e){
          this.setState({
              editId: "",
              edit: false
          })
      }

      descriptionLength(e){
        this.setState({
          description: e
        })
      }
    
    
      editTable(){
        if (this.state.listings.length == 0) {
          return (
            <div className="coming-soon-table">
              <p>loading...</p>
            </div>
          )
        } else if (this.state.location === false && this.state.edit === true && this.state.editId.length > 0){
            console.log(this.state.editObj);
            return (
                <div className="modal-container">
                    <Modal
                    visible={this.state.edit}
                    width="50%"
                    height="75%"
                    effect="fadeInLeft"
                    onClickAway={this.closeEdit.bind(this)}
                    >
                    <div className="form-container">
                    <p className="font-weight-bold justify-content-center text-center">ONLY EDIT THE FIELD YOU WISH TO CHANGE</p>
                    <form onSubmit={this.handleEditSubmit.bind(this)}>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" id="address" placeholder={this.state.editObj.address}/>
                        </div>
                        <div className="form-group">
                            <label>Brief Description</label>
                            <input type="text" className="form-control" id="desc" placeholder={this.state.editObj.desc}/>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Price</label>
                            <input type="text" className="form-control" id="price" placeholder={this.state.editObj.price}/>
                            </div>
                            <div className="col">
                            <label>Live Date / ETA</label>
                            <input type="text" className="form-control" id="eta" placeholder={this.state.editObj.eta} />
                            </div>
                            <div className="col">
                            <label>Year</label>
                            <input type="number" className="form-control" id="year" placeholder={this.state.editObj.year}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                            <label>Square Feet</label>
                            <input type="number" className="form-control" id="sqft" placeholder={this.state.editObj.sqft}/>
                            </div>
                            <div className="col">
                            <label>Bed</label>
                            <input type="text" className="form-control" id="bed" placeholder={this.state.editObj.bed}/>
                            </div>
                            <div className="col">
                            <label>Bath</label>
                            <input type="text" className="form-control" id="bath" placeholder={this.state.editObj.bath}/>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                            <label>Photo Link</label>
                            <input type="text" className="form-control" id="photoLink" placeholder={this.state.editObj.photoLink}/>
                            </div>
                            <div className="col">
                            <label>Agent</label>
                            <input type="text" className="form-control" id="agent" placeholder={this.state.editObj.agent}/>
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </Modal>
                </div>
            )
        }
        else {
          return (
            <div className="coming-soon-table">
              <table className="table table-striped">
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
                    <td id={i}>{e.address}</td>
                    {e.desc.length > 20 && this.state.description !== e._id ? <td>{e.desc.slice(0,20) + "..."}  <a href="#/edit-listing" onClick={() => this.descriptionLength(e._id)}>more</a></td> : this.state.description === e._id  ? <td>{e.desc} <a href="#/edit-listing" onClick={() => this.descriptionLength("")}>less</a></td> : <td>{e.desc}</td>}
                    <td id={i}>{e.price}</td>
                    <td id={i}>{e.eta}</td>
                    <td id={i}>{e.year}</td>
                    <td id={i}>{e.sqft}</td>
                    <td id={i}>{e.bed}</td>
                    <td id={i}>{e.bath}</td>
                    {e.photoLink.length > 0 ? <td><a href={e.photoLink}>photos</a></td> : <td></td>}
                    <td id={i}>{e.premarket}</td>
                    <td id={i}>{e.agent}</td>
                    <td id={i}><input type="button" className="btn btn-success" id={e.id} onClick={() => this.handleEdit(e._id)} value="Edit"/></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          )
        }
      }

      modalTable(){

      }

  render() {
      if (this.state.location === false){
          return (
              <div>
                <Navbar />
                {this.editTable()}
                </div>
            );
        } else {
            return <Redirect to="/"/>
        }
    }
}

export default EditListings;
