import React from "react";

const PopBrand = ({ id, label }) => {
   return (
      <div className="">
         <label class="flex items-center gap-2 relative w-[124px] font-pub text-[14px] font-normal text-[#475156] leading-5 ">
            <input
               type="checkbox" id={id}
               class="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded checked:bg-[#FA8232] checked:border-[#FA8232] cursor-pointer hover:border-[#FA8232] transition-all duration-300"
            />
            <svg
               class="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
               viewBox="0 0 20 20"
               fill="currentColor">
               <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
               />
            </svg>
            {label}
         </label>
      </div>
   );
};

export default PopBrand;
