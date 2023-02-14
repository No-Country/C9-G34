import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";

// --------------------------------------------------------------------

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<ContactPage />} />
      <Route path="/profile" element={<InformationPage />} /> */}
    </Routes>
  );
}
