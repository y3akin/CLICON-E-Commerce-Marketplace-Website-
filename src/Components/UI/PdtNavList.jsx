import React from "react";

const PdtNavList = ({pdtList}) => {
   return (
      <li className="font-pub font-normal hover:font-semibold hover:text-[#191C1F] text-[14px] leading-5 text-[#5F6C72] p-2  relative inline-block transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5  after:bg-[#FA8232] after:w-0 after:content-['']  not-visited:hover:after:w-full hover:after:transition-all hover:after:duration-600 cursor-pointer">
         {pdtList}
      </li>
   );
};

export default PdtNavList;
