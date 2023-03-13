import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import Root from "../pages/Root";
import SinglePage from "../pages/SinglePage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
        index: true,
      },
      {
        path: "/catalog/:id",
        element: <SinglePage />,
      },
      {
        path: "/user/:id",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
