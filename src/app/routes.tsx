import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";
import { News } from "./pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
  {
    path: "/noticias",
    Component: News,
  },
  {
    path: "/noticias/:slug",
    Component: News,
  },
]);
