import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/index";
import ContactUS from "../components/pages/contactus/index";
import Home from "../components/pages/home/index";
import Login from "../components/pages/login/index";
import Posts from "../components/pages/posts/index";
import SignUp from "../components/pages/signup/index";

const RouterIndex = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default RouterIndex;
