import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
const [isAuth,setIsAuth] = useState(false);
const [isPopup, setIsPopup] = useState(false);

    const setAuth = (payload) => {
        setIsAuth(payload)
    }

    const contextData = {
       message: "Social Awareness",
       setAuthentication: setAuth,
       isAuthenticated: isAuth,
       setIsPopup,
       isPopup
      };

 return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;