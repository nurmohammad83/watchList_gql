import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import WatchListsPage from "../pages/WatchListsPage";
import WatchingPage from "../pages/WatchingPage";
import WatchedListsPage from "../pages/WatchedListsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/watchlist",
        element: <WatchListsPage />,
      },
      {
        path: "/watching-list",
        element: <WatchingPage />,
      },
      {
        path: "/watched-list",
        element: <WatchedListsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
