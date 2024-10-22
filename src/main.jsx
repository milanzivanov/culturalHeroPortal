import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MenuToggleProvider } from "./context/MenuToggleContext";

import Home from "./pages/Home";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import Blog, { loader as blogLoader } from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import RootLayout from "./pages/rootLayout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/blogovi",
        element: <Blogs />,
        loader: blogsLoader,
        errorElement: <Error />,
      },
      {
        path: "/blogovi/:blogId",
        element: <Blog />,
        loader: blogLoader,
        errorElement: <Error />,
      },
      { path: "/onama", element: <About /> },
      { path: "/kontakt", element: <Contact /> },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuToggleProvider>
      <RouterProvider router={router} />
    </MenuToggleProvider>
  </StrictMode>,
);
