import React, { useContext } from "react";
import classes from "./Navigation.module.css";

import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const ctx =  useContext(AuthContext)
  return (
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggin && (
            <li>
              <a href="">User</a>
            </li>
          )}
          {ctx.isLoggin && (
            <li>
              <a href="">Admin</a>
            </li>
          )}
          {ctx.isLoggin && (
            <li>
              <button onClick={props.logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
  );
};
export default Navigation;
