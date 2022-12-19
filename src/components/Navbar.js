import React from "react";
import NewsIcon from "./news.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={NewsIcon} alt="icon" />
            News Monger
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/business" className="nav-link">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/entertainment" className="nav-link">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/health" className="nav-link">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/science" className="nav-link">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sports" className="nav-link">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/technology" className="nav-link">
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

}

export default Navbar;
