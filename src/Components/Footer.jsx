import React from "react";
import Container from "../Layouts/Container";
import Footer_Logo from ".././assets/logo2.png";
import { Link } from "react-router-dom";
import FootList from "./UI/FootList";
import GooglePlay from ".././assets/Google-play.png";
import Apple from ".././assets/Apple.png";
import FootTag from "./UI/FootTag";

const Footer = () => {
   return (
      <footer className="bg-[#191C1F] py-[40px] sm:py-[72px] animate-fadeIn">
         <Container>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-4">
               <div className="w-full sm:w-[312px] animate-fadeInUp stagger-1">
                  <Link
                     to="/"
                     reloadDocument
                     className="flex items-center gap-2 hover-scale transition-smooth">
                     <img src={Footer_Logo} alt="CLICON" className="w-8" />
                     <h2 className="font-pub font-bold text-[24px] sm:text-[32px] leading-10 text-[#FFFFFF]">
                        CLICON
                     </h2>
                  </Link>

                  <div className="mt-6">
                     <h4 className="font-pub font-normal text-[12px] sm:text-[14px] leading-5 text-[#77878F]">
                        Customer Supports:
                     </h4>
                     <h4 className=" mt-px font-pub font-medium text-[14px] sm:text-[18px] leading-6 text-[#FFFFFF] hover-brighten transition-smooth cursor-pointer">
                        (629) 555-0129
                     </h4>
                     <h4 className="w-full sm:w-[248px] mt-3 font-pub font-normal text-[14px] sm:text-[16px] leading-6 text-[#ADB7BC]">
                        4517 Washington Ave. Manchester, Kentucky 39495
                     </h4>
                     <h4 className="w-full sm:w-[248px] mt-3 font-pub font-medium text-[14px] sm:text-[16px] leading-6 text-[#FFFFFF] hover-brighten transition-smooth cursor-pointer">
                        info@kinbo.com
                     </h4>
                  </div>
               </div>

               <div className="w-full sm:w-[200px] animate-fadeInUp stagger-2">
                  <h3 className="font-pub font-medium text-[14px] sm:text-[16px] leading-6 text-[#FFFFFF]">
                     TOP CATEGORY
                  </h3>
                  <ul className="mt-3">
                     <li>
                        <FootList list={"Computer & Laptop"} />
                     </li>
                     <li>
                        <FootList list={"SmartPhone"} />
                     </li>
                     <li>
                        <FootList list={"Headphone"} />
                     </li>
                     <li>
                        <FootList list={"Accessories"} />
                     </li>
                     <li>
                        <FootList list={"Camera & Photo"} />
                     </li>
                     <li>
                        <FootList list={"TV & Homes"} />
                     </li>
                  </ul>
               </div>

               <div className="w-full sm:w-[200px] animate-fadeInUp stagger-3">
                  <h3 className="font-pub font-medium text-[14px] sm:text-[16px] leading-6 text-[#FFFFFF]">
                     QUICK LINKS
                  </h3>
                  <ul className="mt-3">
                     <li>
                        <FootList list={"Shop Product"} />
                     </li>
                     <li>
                        <FootList list={"Shoping Cart"} />
                     </li>
                     <li>
                        <FootList list={"Wishlist"} />
                     </li>
                     <li>
                        <FootList list={"Compare"} />
                     </li>
                     <li>
                        <FootList list={"Track Order"} />
                     </li>
                     <li>
                        <FootList list={"Customer Help"} />
                     </li>
                     <li>
                        <FootList list={"About Us"} />
                     </li>
                  </ul>
               </div>

               <div className="w-full sm:w-[200px]">
                  <h3 className=" font-pub font-medium text-[14px] sm:text-[16px] leading-6 text-[#FFFFFF]">
                     DOWNLOAD APP
                  </h3>
                  <div className="mt-[18px] w-full sm:w-[176px]">
                     <div className="px-5 py-4 flex items-center gap-4 bg-[#303639] rounded-[3px]">
                        <img src={GooglePlay} alt="Google_Play_logo" className="w-8" />
                        <div>
                           <Link
                              to="https://play.google.com/store/games?hl=en"
                              target="_black"
                              className="font-int font-normal text-[10px] sm:text-[11px] leading-[13px] text-[#FFFFFF] hover:underline cursor-pointer">
                              Get it now
                           </Link>
                           <h3 className="mt-1 font-int font-semibold text-[12px] sm:text-[14px] leading-5 text-[#FFFFFF]">
                              Google Play
                           </h3>
                        </div>
                     </div>
                     <div className="mt-3 px-5 py-4 flex items-center gap-4 bg-[#303639] rounded-[3px]">
                        <img src={Apple} alt="Apple_logo" className="w-8" />
                        <div>
                           <Link
                              to="https://www.apple.com/app-store/"
                              target="_blank"
                              className="font-int font-normal text-[10px] sm:text-[11px] leading-[13px] text-[#FFFFFF] hover:underline cursor-pointer">
                              Get it now
                           </Link>
                           <h3 className="mt-1 font-int font-semibold text-[12px] sm:text-[14px] leading-5 text-[#FFFFFF]">
                              App Store
                           </h3>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="w-full sm:w-[330px]">
                  <h3 className="font-pub font-medium text-[14px] sm:text-[16px] leading-6 text-[#FFFFFF]">
                     Popular Tag
                  </h3>

                  <div className="mt-[18px] flex flex-wrap gap-2">
                     <FootTag tag="Game"/>
                     <FootTag tag="iPhone"/>
                     <FootTag tag="TV"/>
                     <FootTag tag="Asus Laptops"/>
                     <FootTag tag="Macbook"/>
                     <FootTag tag="SSD"/>
                     <FootTag tag="Graphics Card"/>
                     <FootTag tag="Power Bank"/>
                     <FootTag tag="Smart TV"/>
                     <FootTag tag="Speaker"/>
                     <FootTag tag="Tablet"/>
                     <FootTag tag="Microwave"/>
                     <FootTag tag="Samsung"/>
                  </div>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
