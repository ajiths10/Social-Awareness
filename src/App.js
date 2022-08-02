import logo from "./logo.svg";
import "./App.css";
import RouterIndex from "./route/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <RouterIndex />
    </div>
  );
};

export default App;
