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
        <Route exact path="/" element={<OnBoarding />} />
        <Route exact path="ticketing" element={<Ticketing />} />
        <Route exact path="pi" element={<PerformanceNavigator />} />
        <Route exact path="pi/:genre" element={<PerformanceInformation />} />
        <Route exact path="detail/:id" element={<Detail />} />
        <Route exact path="overview" element={<OverView />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
