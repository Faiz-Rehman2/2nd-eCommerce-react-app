import * as React from "react";
import App from "./App";
import './index.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/Products.jsx';
import Card from './pages/Card.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "products",
    element: <Products />, 
  },
  {
    path: "card/:id",
    element: <Card />,  
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
