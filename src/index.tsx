import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Auth from "./pages/Auth";

const router = createBrowserRouter([
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
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<RouterProvider router={router}/>);