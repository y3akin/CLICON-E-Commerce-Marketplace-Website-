import React from "react";
import Container from "../../Layouts/Container";
import { FaArrowRight } from "react-icons/fa";
import NewStimg1 from "../../assets/Newsletter/img1.png"
import NewStimg2 from "../../assets/Newsletter/img2.png"
import NewStimg3 from "../../assets/Newsletter/img3.png"
import NewStimg4 from "../../assets/Newsletter/img4.png"
import NewStimg5 from "../../assets/Newsletter/img5.png"
import { Link } from "react-router-dom";

const Newsletter = () => {
   return (
      <section className="bg-[#1B6392] py-[40px] sm:py-[72px] animate-fadeIn">
         <Container>
            <div className="flex flex-col items-center px-4">
               <h2 className="font-pub font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-10 text-[#FFFFFF] animate-fadeInUp stagger-1 text-center">
                  Subscribe to our newsletter
               </h2>
               <p className="max-w-[536px] mt-3 font-pub font-normal text-center text-[14px] sm:text-[16px] leading-6 text-[#5288AC] animate-fadeInUp stagger-2">
                  Praesent fringilla erat a lacinia egestas. Donec vehicula
                  tempor libero et cursus. Donec non quam urna. Quisque vitae
                  porta ipsum.
               </p>

               <div className="mb-8 bg-[#FFFFFF] w-full max-w-[624px] h-auto sm:h-[72px] mt-6 sm:mt-8 p-3 flex flex-col sm:flex-row items-center justify-between rounded-[3px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.12)] animate-fadeInUp stagger-3 hover-lift transition-smooth gap-3 sm:gap-0">
                  <input
                     id="email"
                     name="email"
                     type="email"
                     autoComplete="email"
                     placeholder="Email address"
                     className="w-full sm:w-[424px] outline-0 bg-[#FFFFFF] text-[#191C1F] font-pub font-normal text-[14px] sm:text-[16px] leading-6 px-4 py-3 transition-smooth input-focus hover-glow"
                  />
                  <button className="w-full sm:w-[160px] justify-center rounded-xs bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[12px] sm:text-[14px] leading-12 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200 btn-primary hover-lift">
                     Subscribe <FaArrowRight />
                  </button>
               </div>

               <div className="w-full max-w-[552px] flex flex-wrap items-center justify-center gap-4 sm:gap-0 sm:justify-between animate-fadeInUp stagger-4">
                  <Link target="_blank" to="https://www.google.com/" className="cursor-pointer hover-scale transition-smooth hover-brighten"><img src={NewStimg1} alt="Google" className="h-8 sm:h-10 w-auto" /></Link>
                  <Link target="_blank" to="https://www.amazon.com/" className="cursor-pointer hover-scale transition-smooth hover-brighten"><img src={NewStimg2} alt="Amazon" className="h-8 sm:h-10 w-auto" /></Link>
                  <Link target="_blank" to="https://www.philips.com/global" className="cursor-pointer hover-scale transition-smooth hover-brighten"><img src={NewStimg3} alt="Philips" className="h-8 sm:h-10 w-auto" /></Link>
                  <Link target="_blank" to="https://toshiba.com/tai/" className="cursor-pointer hover-scale transition-smooth hover-brighten"><img src={NewStimg4} alt="Toshiba" className="h-8 sm:h-10 w-auto" /></Link>
                  <Link target="_blank" to="https://www.samsung.com/" className="cursor-pointer hover-scale transition-smooth hover-brighten"><img src={NewStimg5} alt="Samsung" className="h-8 sm:h-10 w-auto" /></Link>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Newsletter;
