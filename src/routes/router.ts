import { lazy } from "react";
import { RouterInterface } from "../interfaces/links";
const Home = lazy(() => import("../views/home"));
const Repositories = lazy(() => import("../views/repositories"));
const Developers = lazy(() => import("../views/developers"));

/**
 * Main App Router
 * @return {object}
 */
const Routes: Array<RouterInterface> = [
  {
    key: 1,
    name: "Repositories",
    path: "/",
    exact: true,
    title: "Repositories",
    meta: {},
    component: Home,
  },

  {
    key: 1,
    name: "Repositories",
    path: "/repositories",
    exact: true,
    title: "Repositories",
    meta: {},
    component: Repositories,
  },
  {
    key: 3,
    name: "Developers",
    path: "/developers",
    exact: false,
    title: "Developers",
    meta: {},
    component: Developers,
  },
];

export default Routes;
