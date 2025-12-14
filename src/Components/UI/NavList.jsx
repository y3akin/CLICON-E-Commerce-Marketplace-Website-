import React from "react";
import { Link } from "react-router";

const NavList = ({ children, className, onClick, to }) => {
   return (
      <Link to={to}
         className={`font-pub font-medium leading-5 text-[#5F6C72] hover:text-[#191C1F] px-6 py-3.5 hover:bg-[#F2F4F5] transition-all duration-300 ${className}`} onClick={onClick}>
         {children}
      </Link>
   );
};

export default NavList;
