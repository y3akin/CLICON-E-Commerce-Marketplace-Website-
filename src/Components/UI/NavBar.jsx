import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../Layouts/Container";
import Flex from "./Flex";
import Logo from "../../assets/logo.png";
import NavList from "./NavList";
import ListItems from "../ListItems";

// icon
import { BsFacebook, BsReddit, BsInfoCircle } from "react-icons/bs";
import {
   FaPinterest,
   FaYoutube,
   FaInstagram,
   FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter, FaRegHeart, FaRepeat } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import {
   IoIosArrowDown,
   IoIosArrowUp,
   IoIosArrowForward,
} from "react-icons/io";
import { PiMapPinLine, PiHeadphones } from "react-icons/pi";
import { TbPhoneCall } from "react-icons/tb";

const NavBar = () => {
   let [more, setMore] = useState(false);
   let [phoneMore, setPhoneMore] = useState(false);
   

   useEffect(() => {
      if (!more) {
         setPhoneMore(false);
      }
   }, [more]);

   let [login, setLogin] = useState(false);

   let [info, setInfo] = useState({
      email: "",
      password: "",
   });

   let [error, setError] = useState("");

   let handleChange = (e) => {
      setInfo((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
      setError("");
   };

   let handleSubmit = (e) => {
      e.preventDefault();

      if (!info.email || !info.password) {
         setError("All fields are required");
      } else if (
         info.email === "cilicon@gmail.com" &&
         info.password === "123456"
      ) {
         alert("LogIn Successful");
         setLogin(!login);
         setInfo({
            email: "",
            password: "",
         });
      } else {
         setError("Incorrect email or password");
      }
   };

   return (
      <nav className="z-9999">
         {/* Welcome Part */}
         <div className="bg-[#1B6392] text-white font-pub border-b border-[#5E91B2]">
            <Container>
               <Flex className="justify-between py-4  ">
                  <h4 className="text-[14px] font-normal leading-5">
                     Welcome to Clicon online eCommerce store.
                  </h4>

                  <div className="flex items-center gap-3">
                     <h4 className="text-[14px] font-normal leading-5">
                        Follow Us:
                     </h4>
                     <div className="flex items-center gap-3">
                        <Link target="_blank" to="http://www.facebook.com">
                           <BsFacebook className="cursor-pointer" />
                        </Link>
                        <Link target="_blank" to="https://www.pinterest.com/">
                           <FaPinterest className="cursor-pointer" />
                        </Link>
                        <Link target="_blank" to="https://x.com/">
                           <FaXTwitter className="cursor-pointer" />
                        </Link>
                        <Link target="_blank" to="https://www.reddit.com/">
                           <BsReddit className="cursor-pointer" />
                        </Link>
                        <Link target="_blank" to="https://www.youtube.com/">
                           <FaYoutube className="cursor-pointer" />
                        </Link>
                        <Link target="_blank" to="https://www.instagram.com/">
                           <FaInstagram className="cursor-pointer" />
                        </Link>
                     </div>
                  </div>
               </Flex>
            </Container>
         </div>

         {/* NavLogo */}
         <div className="bg-[#1B6392] text-white font-pub">
            <Container>
               <Flex className="justify-between py-5">
                  <Link
                     to="/" reloadDocument
                     className="flex items-center gap-2 cursor-pointer">
                     <img src={Logo} alt="logo" />
                     <h2 className="font-pub text-[32px] font-bold leading-10 tracking-[-1%]">
                        CLICON
                     </h2>
                  </Link>

                  {/* search box */}
                  <div className="flex items-center">
                     <input
                        type="text"
                        placeholder="Search for anything..."
                        className="w-[646px] bg-white text-black font-pub py-3.5 pl-5 pr-12 text-[14px] font-normal leading-5 outline-0"
                     />
                     <FiSearch className="text-[24px] text-black -ml-10 cursor-pointer" />
                  </div>

                  {/* shop & login icon */}
                  <div className="flex items-center gap-6 relative">
                     <Link to="/cart"><MdOutlineShoppingCart className="text-[32px] cursor-pointer hover:text-[#a3c3ca] transition-all duration-200" /></Link>
                     <FaRegHeart className="text-[32px] cursor-pointer hover:text-[#a3c3ca] transition-all duration-200" />
                     <AiOutlineUser
                        className="text-[32px] cursor-pointer hover:text-[#a3c3ca] transition-all duration-200"
                        onClick={() => setLogin(!login)}
                     />

                     {/* Log In  */}
                     <div
                        className={`absolute top-11 right-0 bg-white rounded-sm shadow-[0px_8px_40px_rgba(0,0,0,0.12)]  transition-all duration-200 origin-top z-9999 overflow-hidden ${
                           login
                              ? "opacity-100 scale-y-100 py-3"
                              : "opacity-0 scale-y-0 py-0"
                        } w-[424px]`}>
                        <div className="w-[360px] my-8 mx-8">
                           <h2 className="font-pub text-[20px] font-semibold text-center mb-5 leading-7 text-[#191C1F]">
                              Sign in to your account
                           </h2>

                           <div className="flex flex-col items-start">
                              <label
                                 htmlFor="email"
                                 className="font-pub font-normal text-[14px] leading-5 text-[#191C1F]">
                                 Email Address
                              </label>
                              <input
                                 onChange={handleChange}
                                 id="email"
                                 name="email"
                                 type="email"
                                 value={info.email}
                                 autoComplete="email"
                                 className="outline-0 w-full mt-2 p-2.5 shadow-[inset_0_0_0_1px_#E4E7E9] text-[#191C1F] font-pub font-normal text-[18px] leading-5"
                              />
                              <div className="w-full mt-4 flex items-center justify-between">
                                 <label
                                    htmlFor="password"
                                    className=" font-pub font-normal text-[14px] leading-5 text-[#191C1F]">
                                    Password
                                 </label>

                                 <Link className="font-pub text-[14px] font-medium  leading-5 text-[#2DA5F3] hover:underline transition-all duration-300">
                                    Forget Password
                                 </Link>
                              </div>
                              <input
                                 onChange={handleChange}
                                 id="password"
                                 name="password"
                                 type="password"
                                 value={info.password}
                                 autoComplete="current-password"
                                 className="outline-0 w-full mt-2 p-2.5 shadow-[inset_0_0_0_1px_#E4E7E9] text-[#191C1F] font-pub font-normal text-[18px] leading-5"
                              />{" "}
                              {error && (
                                 <p className="text-red-600 mt-2">{error}</p>
                              )}
                           </div>

                           <button
                              className="w-full justify-center rounded-xs mt-5 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[14px] leading-12 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200"
                              onClick={handleSubmit}>
                              Login <FaArrowRight />
                           </button>

                           <div className="flex items-center justify-between mt-6">
                              <div className="w-[108px] h-px bg-[#E4E7E9]"></div>
                              <h4 className="px-2 font-pub font-normal text-[14px] leading-5 text-[#77878F]">
                                 Don’t have account
                              </h4>
                              <div className="w-[108px] h-px bg-[#E4E7E9]"></div>
                           </div>
                           <button className="w-full justify-center rounded-xs mt-5 bg-[#FFFFFF] flex items-center gap-2 text-[#FA8232] border border-[#FFE7D6] font-pub font-bold text-[14px] leading-12 tracking-[1.2%] cursor-pointer hover:bg-[#FA8232] hover:text-[#FFFFFF] transition-all duration-200">
                              <Link
                                 to="signup"
                                 onClick={() => setLogin(!login)}>
                                 Create account
                              </Link>
                           </button>
                        </div>
                     </div>
                  </div>
               </Flex>
            </Container>
         </div>

         <div className="border-b border-[#E4E7E9] bg-[#FFFFFF]">
            <Container>
               <Flex className="justify-between py-4">
                  <div className="relative">
                     <ul className="flex items-center">
                        <li
                           onClick={() => setMore(!more)}
                           className={`font-pub font-medium leading-5 text-[#5F6C72] hover:text-[#191C1F] px-6 py-3.5 hover:bg-[#F2F4F5] transition-all duration-300 ${
                              more
                                 ? "bg-[#FA8232] text-white hover:bg-[#FA8232] hover:text-white"
                                 : ""
                           }`}>
                           <button className={`flex items-center gap-2 cursor-pointer`}>
                              All Category
                              <IoIosArrowDown
                                 className={`${
                                    more
                                       ? "hidden"
                                       : "cursor-pointer bg-transparent"
                                 }`}
                              />
                              <IoIosArrowUp
                                 className={`${
                                    more
                                       ? "cursor-pointer bg-transparent"
                                       : "hidden"
                                 }`}
                              />
                           </button>
                        </li>
                        <li>
                           <NavList to="trackorder" className="flex items-center gap-2 ">
                              <PiMapPinLine /> Track Order
                           </NavList>
                        </li>
                        <li>
                           <NavList to="compare" className="flex items-center gap-2 ">
                              <FaRepeat /> Compare
                           </NavList>
                        </li>
                        <li>
                           <NavList to="customersupport" className="flex items-center gap-2 ">
                              <PiHeadphones /> Customer Support
                           </NavList>
                        </li>
                        <li>
                           <NavList
                              to="info"
                              className="flex items-center gap-2 ">
                              <BsInfoCircle /> Need Help
                           </NavList>
                        </li>
                     </ul>

                     <ul
                        className={`absolute bg-white shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] transition-all duration-300 origin-top z-9999 ${
                           more
                              ? "opacity-100 scale-y-100 py-3 w-60 rounded-[3px]"
                              : "opacity-0 scale-y-0 py-0 w-60"
                        }`}>
                        <Link to="/shop" onClick={() => setMore(false)}><ListItems>Computer & Laptop</ListItems></Link>
                         <Link to="/shop" onClick={() => setMore(false)}> <ListItems>Computer Accessories</ListItems></Link>
                        <ListItems
                           className={`flex items-center justify-between ${
                              phoneMore
                                 ? "bg-[#F2F4F5] text-[#191C1F] font-medium"
                                 : "bg-transparent"
                           }`}
                           onClick={() => setPhoneMore(!phoneMore)}>
                           SmartPhone
                           <IoIosArrowDown
                              className={`mr-5 ${
                                 phoneMore ? "hidden" : "block"
                              }`}
                           />
                           <IoIosArrowForward
                              className={`mr-5 ${
                                 phoneMore ? "block" : "hidden"
                              }`}
                           />
                        </ListItems>
                        <Link to="/shop" onClick={() => setMore(false)}> <ListItems>Headphone</ListItems></Link>
                       <Link to="/shop" onClick={() => setMore(false)}><ListItems>Mobile Accessories</ListItems></Link>
                        <Link to="/shop" onClick={() => setMore(false)}><ListItems>Gaming Console</ListItems></Link>
                        <Link to="/shop" onClick={() => setMore(false)}> <ListItems>Camera & Photo</ListItems></Link>
                       <Link to="/shop" onClick={() => setMore(false)}><ListItems>TV & Homes Appliances</ListItems></Link>
                        <Link to="/shop" onClick={() => setMore(false)}> <ListItems>Watchs & Accessories</ListItems></Link>
                       <Link to="/shop" onClick={() => setMore(false)}><ListItems>GPS & Navigation</ListItems></Link>
                        <Link to="/shop" onClick={() => setMore(false)}><ListItems>Warable Technology</ListItems></Link>                        
                     </ul>

                     <ul
                        className={`absolute left-[260px] top-13 bg-white shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] z-9999 transition-all duration-300 overflow-hidden origin-left ${
                           phoneMore
                              ? "opacity-100 scale-x-100 p-4 w-[204px] rounded-[3px]"
                              : "opacity-0 scale-x-0 p-0 w-[204px]"
                        }`}>
                        {[
                           "All",
                           "iPhone",
                           "Samsung",
                           "Realme",
                           "Xiaomi",
                           "Oppo",
                           "Vivo",
                           "OnePlus",
                           "Huawei",
                           "Infinix",
                           "Tecno",
                        ].map((item, i) => (
                           <Link to="/shop" onClick={() => setMore(false)}><ListItems key={i}>{item}</ListItems></Link>
                        ))}
                     </ul>
                  </div>

                  <div className="flex items-center gap-2 cursor-pointer">
                     <TbPhoneCall className="text-[28px] text-[#191C1F]" />
                     <h3 className="font-pub font-normal text-[18px] leading-6 text-[#191C1F] hover:underline">
                        +1-202-555-0104
                     </h3>
                  </div>
               </Flex>
            </Container>
         </div>
      </nav>
   );
};

export default NavBar;
