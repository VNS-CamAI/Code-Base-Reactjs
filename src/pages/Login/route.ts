import { lazy } from "react";
import { LOGIN } from "../../routes/routes.constant";

const Login = lazy(() => import("./"));

const loginRoute = {
  path: LOGIN,
  element: Login,
};
export default loginRoute;
