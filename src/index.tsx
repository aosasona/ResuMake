import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Auth from "./pages/Auth";
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
	path: "privacy-policy",
	element: <div>About</div>,
  },
  {
	path: "terms-and-conditions",
	element: <div>Terms</div>,
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
root.render(<RouterProvider router={router}/>);