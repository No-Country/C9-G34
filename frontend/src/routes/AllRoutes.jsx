import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  PagRegister,
  ProfilePage,
  EditUsers,
} from "../pages";

// --------------------------------------------------------------------

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<PagRegister />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-user" element={<EditUsers />} />
    </Routes>
  );
}
