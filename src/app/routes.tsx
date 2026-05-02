import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
]);
