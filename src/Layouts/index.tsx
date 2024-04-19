import React, { FC, Suspense } from "react";
import { Route,Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import MainLayout from "./MainLayout";
import { publicRoutes } from "../routes/routes.public";
import { authRoutes } from "../routes/routes.auth";
import Home from "../pages/Home";
const Layout: FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map(({ path, element }) => {
          const Element: FC = element;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={null}>
                  <Element />
                </Suspense>
              }
            />
          );
        })}

      </Route>
      <Route path="*" element={<Home />} />

      <Route element={<AuthLayout />}>
        {authRoutes.map(({ path, element }) => {
          const Element: FC = element;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={null}>
                  <Element />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Layout;
