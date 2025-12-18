import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import RootLayouts from "./Layouts/RootLayouts.jsx";
import Registration from "./Pages/Registration.jsx";
import Info from "./Pages/Info.jsx";

import ProductProvider from "./Context/ProductContext.jsx";
import TrackOrder from "./Pages/TrackOrder.jsx";
import Compare from "./Pages/Compare.jsx";
import CustomerSupport from "./Pages/CustomerSupport.jsx";
import Shop from "./Pages/Shop.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      Component: RootLayouts,
      children: [
         { index: true, Component: Home },
         { path: "trackorder", Component: TrackOrder },
         { path: "compare", Component: Compare },
         { path: "customersupport", Component: CustomerSupport },
         { path: "info", Component: Info },
         { path: "shop", Component: Shop },
      ],
   },
   {
      path: "/signup",
      children: [
         // { path: "login", Component: Login },
         { path: "/signup", Component: Registration },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

      <ProductProvider>
         <RouterProvider router={router} />
      </ProductProvider>

);
