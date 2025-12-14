import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/UI/NavBar";
import Footer from "../Components/Footer";

const RootLayouts = () => {
   return (
      <>
         <NavBar />
         <Outlet />
         <Footer />
      </>
   );
};

export default RootLayouts;
