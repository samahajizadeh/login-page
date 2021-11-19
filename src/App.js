import React, { useState, Fragment, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const setLoginStorage = localStorage.getItem("isLoggedIn");
    if (+setLoginStorage === 1) {
      setIsLogin(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("isLoggedIn");
  };
  const loginHandler = (email,pass) => {
    console.log(email,pass)
    localStorage.setItem("isLoggedIn", 1);
    setIsLogin(true);
  };

  return (
    <Fragment>
      <MainHeader isAuthentication={isLogin} logout={logoutHandler} />
      <main>
        {isLogin && <Home />}
        {!isLogin && (
          <Login login={loginHandler} />
        )}
      </main>
    </Fragment>
  );
};
export default App;
