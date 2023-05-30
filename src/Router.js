import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import OnBoarding from "./pages/OnBoarding";
import Ticketing from "./pages/Ticketing";
import PerformanceInformation from "./pages/PerformanceInformation";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<OnBoarding />} />
        <Route exact path="main" element={<Main />} />
        <Route exact path="ticketing" element={<Ticketing />} />
        <Route exact path="pi" element={<PerformanceInformation />} />
        <Route exact path="detail/:id" element={<Detail />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
