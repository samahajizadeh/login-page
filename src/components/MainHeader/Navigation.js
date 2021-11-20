import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
      {props.isAuthentication &&<li>
          <a href="">User</a>
        </li>}
        {props.isAuthentication &&<li>
          <a href="">Admin</a>
        </li>}
        {props.isAuthentication &&<li>
          <button  onClick={props.logout}>Logout</button>
        </li>}
      </ul>
    </nav>
  );
};
export default Navigation;
