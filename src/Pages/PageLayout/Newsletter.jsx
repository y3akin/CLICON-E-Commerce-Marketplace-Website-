import React from "react";
import Container from "../../Layouts/Container";
import { FaArrowRight } from "react-icons/fa";
import NewStimg1 from "../../assets/Newsletter/img1.png"
import NewStimg2 from "../../assets/Newsletter/img2.png"
import NewStimg3 from "../../assets/Newsletter/img3.png"
import NewStimg4 from "../../assets/Newsletter/img4.png"
import NewStimg5 from "../../assets/Newsletter/img5.png"
import { Link } from "react-router";

const Newsletter = () => {
   return (
      <section className="bg-[#1B6392] py-[72px]">
         <Container>
            <div className="flex flex-col items-center ">
               <h2 className="font-pub font-semibold text-[32px] leading-10 text-[#FFFFFF]">
                  Subscribe to our newsletter
               </h2>
               <p className="max-w-[536px] mt-3 font-pub font-normal text-center text-[16px] leading-6 text-[#5288AC]">
                  Praesent fringilla erat a lacinia egestas. Donec vehicula
                  tempor libero et cursus. Donec non quam urna. Quisque vitae
                  porta ipsum.
               </p>

               <div className="mb-8 bg-[#FFFFFF] w-[624px] h-[72px] mt-8 p-3 flex items-center justify-between rounded-[3px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.12)]">
                  <input
                     id="email"
                     name="email"
                     type="email"
                     autoComplete="email"
                     placeholder="Email address"
                     className="w-[424px] outline-0 bg-[#FFFFFF] text-[#191C1F] font-pub font-normal text-[16px] leading-6 px-4 py-3 "
                  />
                  <button className="w-[160px] justify-center rounded-xs bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[14px] leading-12 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200">
                     Subscribe <FaArrowRight />
                  </button>
               </div>

               <div className="w-[552px] flex items-center justify-between">
                  <Link target="_blank" to="https://www.google.com/" className="cursor-pointer"><img src={NewStimg1} alt="Google" /></Link>
                  <Link target="_blank" to="https://www.amazon.com/" className="cursor-pointer"><img src={NewStimg2} alt="Amazon" /></Link>
                  <Link target="_blank" to="https://www.philips.com/global" className="cursor-pointer"><img src={NewStimg3} alt="Philips" /></Link>
                  <Link target="_blank" to="https://toshiba.com/tai/" className="cursor-pointer"><img src={NewStimg4} alt="Toshiba" /></Link>
                  <Link target="_blank" to="https://www.samsung.com/" className="cursor-pointer"><img src={NewStimg5} alt="Samsung" /></Link>               </div>
            </div>
         </Container>
      </section>
   );
};

export default Newsletter;
