import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../Components/UI/NavBar";
import Footer from "../Components/Footer";

const RootLayouts = () => {
   return (
      <>
         <NavBar />
         <Outlet />
         <ScrollRestoration/>
         <Footer />
      </>
   );
};

export default RootLayouts;
