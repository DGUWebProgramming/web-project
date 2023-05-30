import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import OnBoarding from "./pages/OnBoarding";
import Ticketing from "./pages/Ticketing";
import PerformanceInformation from "./pages/PerformanceInformation";
import Detail from "./pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="main" element={<Main />} />
        <Route path="ticketing" element={<Ticketing />} />
        <Route path="pi" element={<PerformanceInformation />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
