import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="">User</a>
        </li>
        <li>
          <a href="">Admin</a>
        </li>
        <li>
          {props.isAuthentication &&<button  onClick={props.logout}>Logout</button>}
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
