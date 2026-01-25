import React from "react";
import Container from "../../Layouts/Container";
import { FaArrowRight } from "react-icons/fa";
import Header_Img1 from "../../assets/Header/img1.png";
import Header_Img2 from "../../assets/Header/img2.png";
import Header_Img3 from "../../assets/Header/img3.png";
import Header_Img4 from "../../assets/Header/img4.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsBoxSeam } from "react-icons/bs";
import { PiTrophyLight, PiCreditCard, PiHeadphonesLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,

      customPaging: () => (
         <div className="w-3 h-3 rounded-full bg-[#B0B8BF] transition-all absolute -left-85 z-9999" />
      ),

      dotsClass: "slick-dots custom-dots flex !bottom-5 justify-center gap-2"
   };

   return (
      <header className="my-6 animate-fadeIn">
         <Container>
            <div className=" flex items-center justify-between">
               <div className="w-[872px]">
                  <Slider {...settings}>
                     <>
                        <div className="max-w-[872px] h-[520px] bg-[#F2F4F5] p-14 flex items-center animate-slideInUp">
                           <div className="max-w-[356px]">
                              <div className="flex items-center gap-2 animate-fadeInUp stagger-1">
                                 <div className="w-6 h-0.5 bg-[#2DA5F3]"></div>
                                 <h3 className="text-[#2DA5F3] font-pub font-semibold text-[14px] leading-5">
                                    THE BEST PLACE TO PLAY
                                 </h3>
                              </div>
                              <h3 className="mt-px font-pub font-semibold text-[48px] leading-14 text-[#191C1F] animate-fadeInUp stagger-2">
                                 Xbox Consoles
                              </h3>
                              <p className="mt-4 font-pub font-normal text-[18px] leading-6 text-[#475156] animate-fadeInUp stagger-3">
                                 Save up to 50% on select Xbox games. Get 3
                                 months of PC Game Pass for $2 USD.
                              </p>
                              <Link to="shop" className="w-[190px] justify-center rounded-xs mt-5 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[16px] leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200 btn-primary hover-lift animate-fadeInUp stagger-4">
                                 Shop Now <FaArrowRight />
                              </Link>
                           </div>
                           <div className="w-[368px] relative animate-fadeInRight">
                              <img src={Header_Img1} alt="Header_Img1" className="hover-scale transition-smooth" />
                              <div className="w-[100px] h-[100px] rounded-full bg-[#2DA5F3] font-pub font-semibold text-[22px] text-white flex items-center justify-center absolute top-0 right-0 animate-pulse hover-brighten transition-smooth">
                                 $299
                              </div>
                           </div>
                        </div>
                     </>
                     <>
                        <div className="max-w-[872px] h-[520px] bg-[#191C1F] p-14 flex items-center animate-slideInUp">
                           <div className="max-w-[356px]">
                              <h3 className="text-[#EBC80C] font-pub font-semibold text-[14px] leading-5 animate-fadeInUp stagger-1">
                                 Summer Sales
                              </h3>
                              <h3 className="mt-px font-pub font-semibold text-[48px] leading-14 text-[#FFFFFF] animate-fadeInUp stagger-2">
                                 New Google Pixel 6 Pro
                              </h3>
                              <p className="mt-4 font-pub font-normal text-[18px] leading-6 text-[#c6cdd1] animate-fadeInUp stagger-3">
                                 Google Pixel 6 Pro: powerful AI chip, pro-level
                                 camera, and sleek design for seamless
                                 performance.
                              </p>
                              <Link to="shop" className="w-[190px] justify-center rounded-xs mt-5 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[16px] leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200 btn-primary hover-lift animate-fadeInUp stagger-4">
                                 Shop Now <FaArrowRight />
                              </Link>
                           </div>
                           <div className="w-[368px] relative animate-fadeInRight">
                              <img src={Header_Img4} alt="Header_Img1" className="hover-scale transition-smooth" />
                              <div className="w-[102px] px-4 py-2 rounded-[2px] bg-[#EFD33D] font-pub font-semibold text-[16px] leading-6 absolute top-0 right-6 hover-brighten transition-smooth">
                                 29% OFF
                              </div>
                           </div>
                        </div>
                     </>
                     <>
                        <div className="max-w-[872px] h-[520px] bg-[#F2F4F5] p-14 flex items-center gap-12 animate-slideInUp">
                           <div className="max-w-[356px]">
                              <h3 className="mt-px font-pub font-semibold text-[48px] leading-14 text-[#191C1F] animate-fadeInUp stagger-1">
                                 Xiaomi FlipBuds Pro
                              </h3>
                              <p className="mt-4 font-pub font-normal text-[18px] leading-6 text-[#475156] animate-fadeInUp stagger-2">
                                 Xiaomi FlipBuds Pro: premium true wireless
                                 earbuds with active noise cancellation and
                                 immersive sound.
                              </p>
                              <Link to="shop" className="w-[190px] justify-center rounded-xs mt-5 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[16px] leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200 btn-primary hover-lift animate-fadeInUp stagger-3">
                                 Shop Now <FaArrowRight />
                              </Link>
                           </div>
                           <div className="w-[368px] relative z-9999 animate-fadeInRight">
                              <img
                                 src={Header_Img3}
                                 alt="Header_Img3"
                                 className="w-[300px] hover-scale transition-smooth"
                              />
                              <div className="w-[100px] h-[100px] rounded-full bg-[#2DA5F3] font-pub font-semibold text-[22px] text-white flex items-center justify-center absolute -top-10 right-0 animate-pulse hover-brighten transition-smooth">
                                 $299
                              </div>
                           </div>
                        </div>
                     </>
                  </Slider>
               </div>

               <div className="max-w-[424px] flex flex-col gap-6 animate-fadeInRight">
                  <div className="bg-[#191C1F] pt-12 pl-10 rounded-md flex hover-lift transition-smooth animate-fadeInUp stagger-1">
                     <div className="max-w-40">
                        <h3 className="font-pub font-medium text-[14px] leading-5 text-[#EBC80C]">
                           Summer Sales
                        </h3>
                        <h3 className="mt-[5px] font-pub font-semibold text-[24px] leading-8 text-[#FFFFFF]">
                           New Google Pixel 6 Pro
                        </h3>
                        <Link to="shop" className="w-[156px] justify-center rounded-xs mt-5 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[16px] leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200 btn-primary hover-lift">
                           Shop Now <FaArrowRight />
                        </Link>
                     </div>

                     <div className="w-[236px] pt-3 relative">
                        <img src={Header_Img2} alt="Header_Img2" className="hover-scale transition-smooth" />
                        <div className="w-[102px] px-4 py-2 rounded-[2px] bg-[#EFD33D] font-pub font-semibold text-[16px] leading-6 absolute top-0 right-6 hover-brighten transition-smooth">
                           29% OFF
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#F2F4F5] py-10 rounded-md flex hover-lift transition-smooth animate-fadeInUp stagger-2">
                     <img
                        src={Header_Img3}
                        alt="Header_Img3"
                        className="pl-8 hover-scale transition-smooth"
                     />
                     <div className="max-w-[172px]">
                        <h3 className=" font-pub font-semibold text-[24px] leading-8 text-[#191C1F]">
                           Xiaomi FlipBuds Pro
                        </h3>
                        <h3 className="mt-3 font-pub font-semibold text-[18px] leading-4 text-[#2DA5F3] hover-glow transition-smooth">
                           $299 USD
                        </h3>
                        <Link to="shop" className="w-[156px] justify-center rounded-xs mt-5 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[16px] leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200 btn-primary hover-lift">
                           Shop Now <FaArrowRight />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full mt-6 p-4 border border-[#E4E7E9] rounded-md bg-[#FFFFFF] flex items-center justify-between animate-fadeInUp">
               <div className="w-[280px] flex items-center gap-4 p-4 hover:bg-[#E4E7E9] rounded-[10px] transition-all duration-200 cursor-pointer hover-lift">
                  <BsBoxSeam className="text-[40px] text-[#191C1F] hover-scale transition-smooth" />
                  <div>
                     <h5 className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                        Fasted Delivery
                     </h5>
                     <p className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                        Delivery in 24/H
                     </p>
                  </div>
               </div>
               <div className="w-px h-14 bg-[#E4E7E9]"></div>
               <div className="w-[280px] flex items-center gap-4 p-4 hover:bg-[#E4E7E9] rounded-[10px] transition-all duration-200 cursor-pointer hover-lift">
                  <PiTrophyLight className="text-[40px] text-[#191C1F] hover-scale transition-smooth" />
                  <div>
                     <h5 className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                        24 Hours Return
                     </h5>
                     <p className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                        100% money-back guarantee
                     </p>
                  </div>
               </div>
               <div className="w-px h-14 bg-[#E4E7E9]"></div>
               <div className="w-[280px] flex items-center gap-4 p-4 hover:bg-[#E4E7E9] rounded-[10px] transition-all duration-200 cursor-pointer hover-lift">
                  <PiCreditCard className="text-[40px] text-[#191C1F] hover-scale transition-smooth" />
                  <div>
                     <h5 className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                        Secure Payment
                     </h5>
                     <p className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                        Your money is safe/H
                     </p>
                  </div>
               </div>
               <div className="w-px h-14 bg-[#E4E7E9]"></div>
               <div className="w-[280px] flex items-center gap-4 p-4 hover:bg-[#E4E7E9] rounded-[10px] transition-all duration-200 cursor-pointer hover-lift">
                  <PiHeadphonesLight className="text-[40px] text-[#191C1F] hover-scale transition-smooth" />
                  <div>
                     <h5 className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                        Support 24/7
                     </h5>
                     <p className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                        Live contact/message
                     </p>
                  </div>
               </div>
            </div>
         </Container>
      </header>
   );
};

export default Header;
