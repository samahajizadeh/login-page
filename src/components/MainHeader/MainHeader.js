import React, { Fragment, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";


const MainHeader = () => {
  const ctx = useContext(AuthContext)
  return (
    <div className={classes["main-header"]}>
      <p className={classes["title-header"]}>ATypical page</p>
      <Navigation  logout={ctx.logoutHandler} />
    </div>
  );
};
export default MainHeader;
