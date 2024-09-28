import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/page";
import NotFound from "../pages/notfound/page";
import Layout from "../layout/layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
