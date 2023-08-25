import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import PersonalDetailsPage from "../Pages/PersonalDetailsPage/PersonalDetailsPage";

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
    {
      path: "/personal",
      element: <PersonalDetailsPage></PersonalDetailsPage>
    },
  ]);

export default router;