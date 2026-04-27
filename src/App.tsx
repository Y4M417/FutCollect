import { RouterProvider } from "react-router";
import { router } from "./app/routes"; // Ajusta la ruta si es necesario

export default function App() {
  return <RouterProvider router={router} />;
}
