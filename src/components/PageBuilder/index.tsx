import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { Page404 } from "../../pages/Page404";
import { OrganizationPage } from "../../pages/OrganizationPage";
import { ShiftPage } from "../../pages/ShiftPage";
import { StatisticsPage } from "../../pages/StatisticsPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { LayoutWrapper } from "../LayoutWrapper";

export const PageBuilder = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LayoutWrapper>
              <LoginPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <LayoutWrapper>
              <RegistrationPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="*"
          element={
            <LayoutWrapper withAside>
              <Routes>
                <Route index element={<HomePage />} />
                <Route
                  path="/organization/:id"
                  element={<OrganizationPage />}
                />
                <Route path="/shift/:id" element={<ShiftPage />} />
                <Route
                  path="/statistic/:organizationId"
                  element={<StatisticsPage />}
                />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </LayoutWrapper>
          }
        />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
