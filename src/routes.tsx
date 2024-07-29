import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import MainComponent from "./pages/MainComponent";
import DashboardContainer from "./Dashboard/DashboardContainer";
import Counter from "./pages/Counter";
import TodoApp from "./pages/TodoApp";
import Cart from "./pages/Cart";


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
      {
        path : "counter",
        element : <Counter />
      },
      {
        path : "todo",
        element : <TodoApp/>
      },
      {
        path : "cart",
        element : <Cart/>
      }
    ]
  },
  {
    path : "/dashboard",
    element : <DashboardContainer />,
    children : [
      {
        path : "main",
        element : <h1>Main dashboard component</h1>
      },
      {
        path : "users",
        element : <h1>Users Page</h1>
      },
      {
        path : "clients",
        element : <h1>Clients page</h1>
      }
    ]
  }
]);

export default router;
