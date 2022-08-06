import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const setAuth = (payload) => {
    setIsAuth(payload);
  };

  const loadUser = () => {
    const UserEmail = localStorage.getItem("UserEmail");
    if (UserEmail) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  const contextData = {
    message: "Social Awareness",
    setAuthentication: setAuth,
    isAuthenticated: isAuth,
    setIsPopup,
    isPopup,
    loadUser,
  };

  return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
