import React, { useState , useEffect } from "react";

const AuthContext = React.createContext({
    isLoggin:false,
    loginHandler:(email,password)=>{},
    logoutHandler:()=>{}
})

export const AuthContextProvider = (props)=>{
    const [isLoggin,setIsLoggin] = useState(false);

    useEffect(() => {
        const setLoginStorage = localStorage.getItem("isLoggedIn");
        if (+setLoginStorage === 1) {
            setIsLoggin(true);
        }
      }, []);
    
      const logoutHandler = () => {
        setIsLoggin(false);
        localStorage.removeItem("isLoggedIn");
      };
      const loginHandler = (email, pass) => {
        console.log(email, pass);
        localStorage.setItem("isLoggedIn", 1);
        setIsLoggin(true);
      };

    return <AuthContext.Provider value={{
        isLoggin: isLoggin,
        loginHandler:loginHandler,
        logoutHandler:logoutHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;