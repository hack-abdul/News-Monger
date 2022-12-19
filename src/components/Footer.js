import React from "react";
import './Footer.css'

const Footer = () => {

  return (
    <footer className="footer " id="footer" >
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="menu">
        <li className="menu__item"><a className="menu__link fs-4" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link fs-4" href="#">About us</a></li>
        <li className="menu__item"><a className="menu__link fs-4" href="#">Contact us</a></li>


      </ul>

      <p className="fs-6" style={{ opacity: '0.95' }}> NewsMonger by Abdul</p>

    </footer>
  );

}

export default Footer;
