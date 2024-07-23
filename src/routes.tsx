import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import MainComponent from "./pages/MainComponent";

const router = createBrowserRouter([
  {
    path : "/",
    element : <MainComponent />,
    children : [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "",
        element: <HomePage />,
      },
    ]
  }
]);

export default router;
