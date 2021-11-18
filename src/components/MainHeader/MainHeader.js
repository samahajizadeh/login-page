import React, { Fragment } from "react";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <div className={classes["main-header"]}>
      <p className={classes["title-header"]}>ATypical page</p>
      <Navigation isAuthentication={props.isAuthentication} logout={props.logout} />
    </div>
  );
};
export default MainHeader;
