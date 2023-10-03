import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Layout/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
