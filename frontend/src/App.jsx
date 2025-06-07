import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <>
            <Header />
            <Home />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
