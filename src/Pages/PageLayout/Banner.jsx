import React from "react";
import Container from "../../Layouts/Container";
import { FaArrowRight } from "react-icons/fa";
import Banner_Img1 from "../../assets/Banner/img1.png";
import Banner_Img2 from "../../assets/Banner/img2.png";
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <section className="mb-[72px]">
         <Container>
            <div className="flex items-center justify-between">
               <div className="w-[648px] p-11 bg-[#F2F4F5] rounded-sm flex items-center justify-between">
                  <div className="max-w-[280px] h-[248px] ">
                     <h3 className="font-pub font-semibold text-[14px] leading-5 text-[#FFFFFF] bg-[#2DA5F3] max-w-40 px-3 py-2.5">
                        INTRODUCING
                     </h3>
                     <h3 className="mt-2 font-pub font-semibold text-[32px] leading-10 text-[#191C1F]">
                        New Apple Homepod Mini
                     </h3>
                     <h3 className="mt-3 font-pub font-normal text-[16px] leading-6 text-[#475156]">
                        Jam-packed with innovation, HomePod mini delivers
                        unexpectedly.
                     </h3>

                     <Link to="shop" className="w-[156px] justify-center rounded-xs mt-8 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[14px] leading-12 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200">
                        Shop Now <FaArrowRight />
                     </Link>
                  </div>
                  <img src={Banner_Img1} alt="Banner_Img1" />
               </div>

               <div className="w-[648px] h-[336px] pl-11 bg-[#191C1F] rounded-sm flex justify-between">
                  <div className="max-w-[280px] h-[248px] my-11 ">
                     <h3 className="font-pub font-semibold text-[14px] leading-5 text-[#000000] bg-[#EFD33D] max-w-40 px-3 py-2.5">
                        INTRODUCING NEW
                     </h3>
                     <h3 className="mt-2 font-pub font-semibold text-[32px] leading-10 text-[#FFFFFF]">
                        Xiaomi Mi 11 Ultra 12GB+256GB
                     </h3>
                     <h3 className="mt-3 font-pub font-normal text-[16px] leading-6 text-[#ADB7BC]">
                        *Data provided by internal laboratories. Industry
                        measurment.
                     </h3>

                     <Link to="shop" className="w-[156px] justify-center rounded-xs mt-8 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[14px] leading-12 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200">
                        Shop Now <FaArrowRight />
                     </Link>
                  </div>
                  <div className="relative z-9999 mt-[31px]">
                     <img src={Banner_Img2} alt="Banner_Img2" />
                     <div className="w-[100px] h-[100px] rounded-full bg-[#2DA5F3] font-pub font-semibold text-[22px] text-white flex items-center justify-center absolute -top-3 right-6">
                        $590
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Banner;
