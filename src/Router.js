import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import OnBoarding from "./pages/OnBoarding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;