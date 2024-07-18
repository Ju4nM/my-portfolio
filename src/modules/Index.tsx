import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./core/App/context/App.context";
import { routes } from "./core/routes/routes.routes";

export default function Index() {
  
  const router = createBrowserRouter(routes)

  return (
    <AppProvider>
      <RouterProvider router = { router } />
    </AppProvider>
  )
}
