import React from "react";
import { Route, Routes } from "react-router-dom";
export default (
  <Routes>
    <Route path="/" />
    <Route path="/about-us" />
    <Route path="/our-ambassadors" />
    <Route path="/collection/:slug" />
    <Route path="/goodie/:slug" />
    <Route path="/checkout" />
  </Routes>
);
