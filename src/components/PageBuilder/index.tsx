import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LayoutWrapper } from "../LayoutWrapper";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { OrganizationPage } from "../../pages/OrganizationPage";
import { ShiftPage } from "../../pages/ShiftPage";
import { StatisticsPage } from "../../pages/StatisticsPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { Page404 } from "../../pages/Page404";

export const PageBuilder = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/">
          <LayoutWrapper>
            <Route path="/" element={<HomePage />} />
            <Route path="/organization/:id" element={<OrganizationPage />} />
            <Route path="/shift/:id" element={<ShiftPage />} />
            <Route
              path="/statistic/:organizationId"
              element={<StatisticsPage />}
            />
            <Route path="/profile" element={<ProfilePage />} />
          </LayoutWrapper>
        </Route>

        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
