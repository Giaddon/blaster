import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Frame from './Frame';
import { HomePage, ErrorPage, UserPage } from '@views';

const user = {
  avatar: null,
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <UserPage user={user} />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);