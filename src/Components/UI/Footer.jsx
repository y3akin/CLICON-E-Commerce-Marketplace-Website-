import React from "react";
import Container from "../../Layouts/Container";
import Footer_Logo from "../../assets/logo2.png";
import { Link } from "react-router";
import FootList from "./FootList";

const Footer = () => {
   return (
      <footer className="bg-[#191C1F] py-[72px]">
         <Container>
            <div className="flex items-start gap-6">
               <div className="w-[312px]">
                  <Link
                     to="/"
                     reloadDocument
                     className="flex items-center gap-2">
                     <img src={Footer_Logo} alt="CLICON" />
                     <h2 className="font-pub font-bold text-[32px] leading-10 text-[#FFFFFF]">
                        CLICON
                     </h2>
                  </Link>

                  <div className="mt-6">
                     <h4 className="font-pub font-normal text-[14px] leading-5 text-[#77878F]">
                        Customer Supports:
                     </h4>
                     <h4 className=" mt-px font-pub font-medium text-[18px] leading-6 text-[#FFFFFF]">
                        (629) 555-0129
                     </h4>
                     <h4 className="w-[248px] mt-3 font-pub font-normal text-[16px] leading-6 text-[#ADB7BC]">
                        4517 Washington Ave. Manchester, Kentucky 39495
                     </h4>
                     <h4 className="w-[248px] mt-3 font-pub font-medium text-[16px] leading-6 text-[#FFFFFF]">
                        info@kinbo.com
                     </h4>
                  </div>
               </div>

               <div>
                  <h3 className="w-[200px] font-pub font-medium text-[16px] leading-6 text-[#FFFFFF]">
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

               <div>
                  <h3 className="w-[200px] font-pub font-medium text-[16px] leading-6 text-[#FFFFFF]">
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

               <div>
                  <h3 className="w-[200px] font-pub font-medium text-[16px] leading-6 text-[#FFFFFF]">
                     DOWNLOAD APP
                  </h3>
                  <div>
                     <div></div>
                  </div>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
