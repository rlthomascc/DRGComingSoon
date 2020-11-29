/* eslint-disable react/jsx-filename-extension */
import React from 'react';


const Navbar = () => {
  const nav = () => (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <img className="" src="https://i.imgur.com/iW9XpX2.png" width="70px" />
      <a className="navbar-brand" href="#">DRG Coming Soon Listings</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarNav" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbarNav" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-primary font-weight-bold" href="#/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success font-weight-bold" href="#/add-new-listing">Add Listing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger font-weight-bold" href="#/delete-listing">Delete Listing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-warning font-weight-bold" href="#/active-listings">Active Listings</a>
          </li>
        </ul>
      </div>
    </nav>
  );


  return (
    <div>
      {nav()}
    </div>
  );
};

export default Navbar;
