import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop/Backdrop";
import MainHeader from "./MainHeader";

import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const sideMenuHandler = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={sideMenuHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={sideMenuHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={sideMenuHandler}>
          <span />
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPLaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
