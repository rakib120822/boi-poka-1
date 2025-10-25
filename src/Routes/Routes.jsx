import { createBrowserRouter } from "react-router";
import React from "react";
import App from "../App";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookDetails from "../pages/bookDetails/BookDetails";
import ReadList from "../pages/readlist/ReadList";
import AuthLayout from "../Layout/AuthLayout.jsx/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/profile/Profile";
import PrivateRouter from "../Provider/PrivateRouter";
import ResetPassword from "../pages/auth/ResetPassword";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: async () =>
          await fetch("/booksData.json").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "readList",
        loader: async () =>
          await fetch("/booksData.json").then((res) => res.json()),
        element: (
          <PrivateRouter>
            <ReadList />
          </PrivateRouter>
        ),
      },
      {
        path: "bookDetails/:id",
        loader: async () =>
          await fetch("/booksData.json").then((res) => res.json()),
        element: (
          <PrivateRouter>
            <BookDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signin",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/reset-password",
        element:<ResetPassword/>
      }
    ],
  },
]);
