import React from "react";

import { NavLink } from "react-router-dom";
const img = "img/icon_car.png";
const img1 = "img/das_img.jpg";
const Boots = () => {
  return (
    <>
      <div className="container-filled">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-sm-6 menu">
            <nav>
              <ul className="nav-list">
                <li>
                  <img src={img} alt="CarDekho" className="logo" />
                  <a href="" className="heading">
                    Cardekho
                  </a>
                </li>
                {/* Search-bar */}
                <li className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                  />
                </li>
                <li>
                  <NavLink to={"/"} className="lang">
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"} className="heart">
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"} className="nav-link">
                    Login
                  </NavLink>
                </li>
              </ul>

              <ul className="quick_links">
                <li>
                  <NavLink to={"/"} className="home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"} className="home">
                    Vehicle Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"} className="home">
                    Complaint Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"} className="home">
                    Trace Status
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"} className="home">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-filled">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-sm-6 header">
            <main>
              <div className="dash_image">
                <img src={img1} className="img1"></img>
              </div>
              <div className="Content">
                <h1>Vehicle investigation System</h1>
              </div>
              <div className="cards">
                <div className="card1">
                  <container></container>
                </div>
                <div className="card1">
                  <container></container>
                </div>
                <div className="card1">
                  <container></container>
                </div>
               
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boots;
