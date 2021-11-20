import React from "react";
import classes from "./Navigation.module.css";

import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
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
      }}
    </AuthContext.Consumer>
  );
};
export default Navigation;
