import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage></LandingPage>
    },
  ]);

export default router;