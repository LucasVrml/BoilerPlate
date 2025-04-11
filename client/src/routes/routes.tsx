import { ExcludedRoutesIfLogged } from "@/lib/layouts/ExcludedRoutesIfLogged";
import { ProtectedRoutes } from "@/lib/layouts/ProtectedRoutes";
import Homepage from "@/pages/Home.page";
import LoginPage from "@/pages/Login.page";
import ProtectedPage from "@/pages/Protected.page";
import SignInPage from "@/pages/SignIn.page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/protected",
        element: <ProtectedPage />,
      },
    ],
  },
  {
    element: <ExcludedRoutesIfLogged />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "*",
    element: <>Not found</>,
  },
]);
