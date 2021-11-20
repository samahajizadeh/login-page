import React, { useState, Fragment, useEffect, useContext } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./store/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {ctx.isLoggin && <Home />}
        {!ctx.isLoggin && <Login />}
      </main>
    </Fragment>
  );
};
export default App;
