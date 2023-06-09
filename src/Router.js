import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PerformanceNavigator from "./pages/PerformanceNavigator";
import OnBoarding from "./pages/OnBoarding";
import Ticketing from "./pages/Ticketing";
import PerformanceInformation from "./pages/PerformanceInformation";
import Detail from "./pages/Detail";
import OverView from "./pages/OverView";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="ticketing" element={<Ticketing />} />
        <Route path="pi" element={<PerformanceNavigator />} />
        <Route path="pi/:genre" element={<PerformanceInformation />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="overview" element={<OverView />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
