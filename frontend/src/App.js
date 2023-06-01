import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./Routes.js";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
