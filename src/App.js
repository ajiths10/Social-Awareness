import logo from "./logo.svg";
import "./App.css";
import RouterIndex from "./route/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ContextProvider from "./context/authContext/ContextProvider";
import CommonContextProvider from "./context/commonContext/CommonContextProvider";

const App = () => {
  return (
    <div className="App">
      <SnackbarProvider>
        <CommonContextProvider>
          <ContextProvider>
            <RouterIndex />
          </ContextProvider>
        </CommonContextProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
