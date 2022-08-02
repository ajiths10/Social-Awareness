import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
const [isAuth,setIsAuth] = useState(false);

    const setAuth = (payload) => {
        setIsAuth(payload)
    }

    const contextData = {
       message: "Social Awareness",
       setAuthentication: setAuth,
       isAuthenticated: isAuth
      };

 return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;