// import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./core/App/context/App.context";
// import { routes } from "./core/routes/routes.routes";
import { LandingProvider } from "./landing/context/Landing.context";
import LandingPage from "./landing/page/Landing.page";

export default function Index() {
  
  // const router = createHashRouter(routes)

  return (
    <AppProvider>
      {/* <RouterProvider router = { router } /> */}
      <LandingProvider><LandingPage/></LandingProvider>
    </AppProvider>
  )
}
