import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import iconClasses from "./DrawerToggle.css";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={iconClasses.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
    {/* <div>MENU</div> */}
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
