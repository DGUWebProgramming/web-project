import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import OnBoarding from "./pages/OnBoarding";
import Ticketing from "./pages/Ticketing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="main" element={<Main />} />
        <Route path="Ticketing" element={<Ticketing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
