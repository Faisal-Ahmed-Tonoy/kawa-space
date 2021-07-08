import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import'./Header.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-style">
        <div className="container-fluid  mt-2" >
          <h1 className="navbar-brand text-dark">YourChallenge</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link  to="/" className="nav-link active product-nav  text-dark"  aria-current="page" > <h6> Product </h6></Link>
              </li>
              <li className="nav-item">
              <Link  to="/" className="nav-link  text-dark " aria-current="page" > <h6> Download </h6></Link>
              </li>
              <li className="nav-item">
              <Link  to="/" className="nav-link  text-dark " aria-current="page" > <h6> Pricing </h6></Link>
              </li>
           
            </ul>
          
          </div>
        </div>
      </nav>

        
    )
}
