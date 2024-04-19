import { lazy } from "react";
import { HOME } from "../../routes/routes.constant";

const Home = lazy(() => import("./"));

const homeRoute = {
  path: HOME,
  element: Home,
};
export default homeRoute;
