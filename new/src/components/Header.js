// import Section from "./Section";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link, Route } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

// import Section from "./Section";

// import MenuIcon from "@mui/icons-material/Menu";
// import ReactDOM from 'react-dom'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <NAV>
      <Image>
        {/* <h1 className="tesla">TESLA</h1> */}
        <img
          src='/images/logo.svg'
          className='tesla'
          alt='Ima'
          width='100px'
          height='15px'
        />
      </Image>

      <CenterNavbar>
        <ul className='CenterNavbarUl'>
          <li>
            <Link to='/modelx'>Model X</Link>
          </li>
          <li>
            <Link to='/model3'>Model 3</Link>
          </li>
          <li>
            <Link to='/modely'>Model Y</Link>
          </li>
          <li>
            <Link to='/solarroof'>Solar Roof</Link>
          </li>
          <li>
            <Link to='/models'>Model S</Link>
          </li>
          <li>
            <Link to='/solarpanels'>Solar Panels</Link>
          </li>
        </ul>
      </CenterNavbar>

      <RightNavbar>
        <ul>
          <li className='RightNavbarUL'>
            <a href='#'>Shop</a>
          </li>
          <li className='RightNavbarUL'>
            <a href='#'>Account</a>
          </li>
          <li className='Menubar'>
            <a href='#' onClick={() => setBurgerStatus(true)}>
              Menu
            </a>
          </li>
        </ul>
      </RightNavbar>
      <BurgerNav show={burgerStatus}>
        <ul>
          <div>
            <Closewrapper>
              <Customclosed onClick={() => setBurgerStatus(false)} />
            </Closewrapper>
          </div>

          {/* <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li> */}
          <li>
            <a href='#'>Existing Inventory</a>
          </li>
          <li>
            <a href='#'>Used Inventory</a>
          </li>
          <li>
            <a href='#'>Trade-In</a>
          </li>
          <li>
            <a href='#'>Test Drive</a>
          </li>
          <li>
            <a href='#'>Cyber Truck</a>
          </li>
          <li>
            <a href='#'>Roadster</a>
          </li>
          <li>
            <a href='#'>Semi</a>
          </li>
          <li>
            <a href='#'>Charging</a>
          </li>
          <li>
            <a href='#'>Powerwall</a>
          </li>
          <li>
            <a href='#'>Commercial Energy</a>
          </li>
          <li>
            <a href='#'>Utilities</a>
          </li>
          <li>
            <a href='#'>Find Us</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Inverstor Relations</a>
          </li>
          <li>
            <a href='#'>
              UnitedStates<small> (English)</small>
            </a>
          </li>
        </ul>
      </BurgerNav>
    </NAV>
  );
}

const NAV = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-display: row;
  flex: 1;
  justify-content: space-between;
  z-index: 1;
`;
const Image = styled.div`
  margin-left: 45px;
  margin-top: 15px;
`;
const CenterNavbar = styled.div`
  font-weight: 700;
  font-size: 11px;
  margin-top: 0.2vw;
  @media screen and (max-width: 1000px) {
    .CenterNavbarUl {
      display: none;
    }
  }
  ul {
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap;
  }
  li {
    list-style: none;
    display: flex;
    padding: 15px;
    margin-top: -5px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
const RightNavbar = styled.div`
  font-size: 12px;
  margin-right: 2vw;
  margin-top: 0.2vw;
  font-weight: 600;
  ul {
    flex-direction: row;
    display: flex;
  }
  li {
    list-style: none;
    display: flex;
    padding: 7px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media screen and (max-width: 700px) {
    .RightNavbarUL {
      display: none;
    }
  }
  @media (max-width: 700px) {
    .Menubar {
      margin-right: 10px;
      margin-top: -7px;
    }
    .Menubar:hover {
      color: white;
      border: 1px solid black;
      border-radius: 100px;
      background-color: grey;
      opacity: 0.15;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -15px;
  background-color: white;
  width: 280px;
  z-index: 16;
  text-align: start;
  align-item: center;
  display: flex;
  overflow: hidden;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    width: 200px;
    height: 20px;
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    margin-left: -20px;
    text-align: center;
  }
  a {
    font-weight: 600;
    text-decoration: none;
    padding: 20px;
    color: black;
  }
  li:hover {
    display: border;
    background-color: rgb(60, 78, 105);
    width: 235px;
    height: 25px;
    margin-left: -35px;
  }
`;
const Customclosed = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  display: inline;
  height:40px;
  margin-top -15px;
`;
const Closewrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header;
