// Pages
import Home from "../pages/home";
import Error404 from "../pages/error";
import User from "../pages/User";

export const routes = [
  {
    path: "/",
    componnet: Home,
    exact: true,
  },
  {
    path: "/user",
    componnet: User,
    exact: true,
  },
  {
    componnet: Error404,
  },
];
