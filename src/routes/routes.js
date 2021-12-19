// Pages
import Home from "../pages/home";
import Error404 from "../pages/error";
import User from "../pages/User";
import BasicLayout from "../layouts/BasicLayout";

export const routes = [
  {
    path: "/",
    layout: BasicLayout,
    componnet: Home,
    exact: true,
  },
  {
    path: "/:username",
    layout: BasicLayout,
    componnet: User,
    exact: true,
  },
  {
    layout: BasicLayout,
    componnet: Error404,
  },
];
