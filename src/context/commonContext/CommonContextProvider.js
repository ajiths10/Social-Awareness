import React from "react";
import CommonContext from "./CommonContext";
import { useSnackbar } from "notistack";

const CommonContextProvider = (props) => {
    const { enqueueSnackbar } = useSnackbar();

    const setAlert = (response) => {
        enqueueSnackbar(response.message, {
          variant: response.type === 1 ? "success" : "error",
          anchorOrigin: { vertical: "bottom", horizontal: "right" },
          //   preventDuplicate: true,
        });
      };

   const contextData = {
    setAlert,
   }
return (
    <CommonContext.Provider value={contextData}>{props.children}</CommonContext.Provider>
 )
}

export default CommonContextProvider;