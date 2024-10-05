import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import BlogItem, { loader as blogLoader } from "./pages/BlogItem";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import RootLayout from "./pages/rootLayout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/blogovi",
        element: <Blogs />,
        loader: blogsLoader,
      },
      {
        path: "/blogovi/:blogId",
        element: <BlogItem />,
        loader: blogLoader,
      },
      { path: "/onama", element: <About /> },
      { path: "/kontakt", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
