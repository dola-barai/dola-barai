import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage></LandingPage>
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>
    },
    {
      path: "/signup",
      element: <SignUpPage></SignUpPage>
    },
  ]);

export default router;