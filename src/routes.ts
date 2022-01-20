import { Route } from "react-hook-guard";
import SideBarLayout from "./layouts/SideBarLayout";
import { lazy } from "react";
import useAuthenticationGuard from "./features/auth/useAuthenticationGuard";

const routes: Route[] = [
  {
    path: "auth",
    component: SideBarLayout,
    children: [
      {
        path: "login",
        component: lazy(() => import("src/features/auth/login")),
      },
      {
        path: "/",
        redirectTo: "login",
      },
    ],
  },
  {
    path: "app",
    canActivate: [useAuthenticationGuard],
    component: SideBarLayout,
    children: [
      {
        path: "home",
        component: lazy(() => import("src/features/home/dashboard")),
      },
      {
        path: "/",
        redirectTo: "home",
      },
    ],
  },
  {
    path: "/",
    redirectTo: "app",
  },
];

export default routes;
