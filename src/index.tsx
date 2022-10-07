import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import './index.css';
import Auth from "./pages/Auth";
import Editor from "./pages/Editor";
import NotFound from "./pages/Errors/NotFound";
import Home from "./pages/Home";

const rawRoutes = [
  {
	path: "/",
	element: <Home/>,
  },
  {
	path: "/auth",
	element: <Auth/>,
  },
  {
	path: "/editor",
	element: <Editor/>,
  },
  {
	path: "privacy-policy",
	element: <div>Privacy</div>,
  },
  {
	path: "terms-and-conditions",
	element: <div>Terms and conditions</div>,
  },
  {
	path: "*",
	element: <NotFound/>,
  },
]

const routes = rawRoutes.map((route) => {
  return {
	...route,
	errorElement: <NotFound/>,
  }
})

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<ErrorBoundary><RouterProvider router={router}/></ErrorBoundary>);