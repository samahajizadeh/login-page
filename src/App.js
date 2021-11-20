import React, { useState, Fragment, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./store/auth-context";

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
  const loginHandler = (email, pass) => {
    console.log(email, pass);
    localStorage.setItem("isLoggedIn", 1);
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider value={{isLoggin:isLogin}}>
      <MainHeader  logout={logoutHandler} />
      <main>
        {isLogin && <Home />}
        {!isLogin && <Login login={loginHandler} />}
      </main>
    </AuthContext.Provider>
  );
};
export default App;
