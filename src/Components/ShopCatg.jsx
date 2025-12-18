import React from "react";

const ShopCatg = ({label, htmlFor, id}) => {

   return (
      <div className="flex items-center gap-2">
         <input
            type="radio"
            name="Category"
            id={id}
            className="w-5 h-5 accent-auto cursor-pointer"
         />
         <label
            htmlFor={htmlFor}
            className="font-pub text-[14px] font-normal text-[#475156] leading-5 hover:font-medium hover:text-mtext transition-all duration-300 cursor-pointer">{label}</label>
      </div>
   );
};

export default ShopCatg;
