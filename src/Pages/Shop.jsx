import React, { useContext, useState } from "react";
import Container from "../Layouts/Container";
import ShopCatg from "../Components/ShopCatg";
import PriceRange from "../Components/PriceRange";
import PopBrand from "../Components/PopBrand";
import FootTag2 from "../Components/UI/FootTag2";
import Products from "./PageLayout/Products";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline, IoStar, IoStarHalf } from "react-icons/io5";
import { ProductProvider } from "../Context/ProductContext";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
   let pdt = useContext(ProductProvider);

   let [favIcon, setFavIcon] = useState({});
   const toggleFav = (id) => {
      setFavIcon((prev) => ({
         ...prev,
         [id]: !prev[id],
      }));
   };
   return (
      <section>
         <div className="bg-[#F2F4F5] py-[26px]">
            <div className="w-[1320px] mx-auto flex items-center gap-2">
               <Link to="/" className="font-int text-[14px] text-[#666666] leading-5 flex items-center gap-2"> <IoHomeOutline/>  Home</Link>
               <MdKeyboardArrowRight className="text-[14px] text-[#666666]"/>
               <Link className="font-int text-[14px] text-[#2DA5F3] leading-5">Shop</Link>
            </div>
         </div>
         <Container>
            <div className="flex items-start gap-6 pt-10 pb-18">
               <div className="w-[312px] flex flex-col gap-6">
                  <div className="border-b border-[#E4E7E9] pb-6">
                     <h2 className="font-pub font-medium text-[16px] leading-6 text-mtext">
                        CATEGORY
                     </h2>
                     <div className="mt-4 flex flex-col gap-3">
                        <ShopCatg
                           id="electdiv"
                           htmlFor="electdiv"
                           label="Electronics Devices"
                        />
                        <ShopCatg
                           id="compLap"
                           htmlFor="compLap"
                           label="Computer & Laptop"
                        />
                        <ShopCatg
                           id="compAccs"
                           htmlFor="compAccs"
                           label="Computer Accessories"
                        />
                        <ShopCatg
                           id="smtPhn"
                           htmlFor="smtPhn"
                           label="SmartPhone"
                        />
                        <ShopCatg
                           id="headPhn"
                           htmlFor="headPhn"
                           label="Headphone"
                        />
                        <ShopCatg
                           id="mobAccs"
                           htmlFor="mobAccs"
                           label="Mobile Accessories"
                        />
                        <ShopCatg
                           id="gamCosl"
                           htmlFor="gamCosl"
                           label="Gaming Console"
                        />
                        <ShopCatg
                           id="camPho"
                           htmlFor="camPho"
                           label="Camera & Photo"
                        />
                        <ShopCatg
                           id="tv"
                           htmlFor="tv"
                           label="TV & Homes Appliances"
                        />
                        <ShopCatg
                           id="watch"
                           htmlFor="watch"
                           label="Watchs & Accessories"
                        />
                        <ShopCatg
                           id="gps"
                           htmlFor="gps"
                           label="GPS & Navigation"
                        />
                        <ShopCatg
                           id="warTech"
                           htmlFor="warTech"
                           label="Warable Technology"
                        />
                     </div>
                  </div>

                  <div className="mt-6 border-b border-[#E4E7E9] pb-6">
                     <h2 className="font-pub font-medium text-[16px] leading-6 text-mtext">
                        PRICE RANGE
                     </h2>
                     <input
                        type="range"
                        name="price"
                        id="price"
                        max="10,000"
                        min="5"
                        className="mt-4 w-full"
                     />

                     <div className="flex items-center justify-between">
                        <button className="w-[150px] font-pub text-[14px] font-normal leading-6 text-[#77878F] text-center px-3 py-2 border border-[#E4E7E9] rounded-[3px] cursor-pointer hover:bg-[#77878F] hover:text-[#FFFFFF] hover:font-medium transition-all duration-300">
                           Min price
                        </button>
                        <button className="w-[150px] font-pub text-[14px] font-normal leading-6 text-[#77878F] text-center px-3 py-2 border border-[#E4E7E9] rounded-[3px] cursor-pointer hover:bg-[#77878F] hover:text-[#FFFFFF] hover:font-medium transition-all duration-300">
                           Min price
                        </button>
                     </div>
                     <div className="mt-4 flex flex-col gap-3">
                        <PriceRange
                           id="AllPr"
                           htmlFor="AllPr"
                           label="All Price"
                        />
                        <PriceRange id="u20" htmlFor="u20" label="Under $20" />
                        <PriceRange
                           id="u100"
                           htmlFor="u100"
                           label="$25 to $100"
                        />
                        <PriceRange
                           id="u300"
                           htmlFor="u300"
                           label="$100 to $300"
                        />
                        <PriceRange
                           id="u500"
                           htmlFor="u500"
                           label="$300 to $500"
                        />
                        <PriceRange
                           id="u1000"
                           htmlFor="u1000"
                           label="$500 to $1,000"
                        />
                        <PriceRange
                           id="u10000"
                           htmlFor="u10000"
                           label="$1,000 to $10,000"
                        />
                     </div>
                  </div>

                  <div className="mt-6 border-b border-[#E4E7E9] pb-6">
                     <h2 className="font-pub font-medium text-[16px] leading-6 text-mtext">
                        POPULAR BRANDS
                     </h2>
                     <div className="mt-4 flex flex-wrap gap-3">
                        <PopBrand id="apple" label="Apple" />
                        <PopBrand id="google" label="Google" />
                        <PopBrand id="microsoft" label="Microsoft" />
                        <PopBrand id="samsung" label="Samsung" />
                        <PopBrand id="dell" label="Dell" />
                        <PopBrand id="hp" label="HP" />
                        <PopBrand id="symphony" label="Symphony" />
                        <PopBrand id="xiaomi" label="Xiaomi" />
                        <PopBrand id="sony" label="Sony" />
                        <PopBrand id="panasonic" label="Panasonic" />
                        <PopBrand id="lg" label="LG" />
                        <PopBrand id="intel" label="Intel" />
                        <PopBrand id="onwPlus" label="One Plus" />
                     </div>
                  </div>

                  <div className="mt-6">
                     <h3 className="font-pub font-medium text-[16px] leading-6 text-mtext">
                        Popular Tag
                     </h3>

                     <div className="mt-[18px] flex flex-wrap gap-2">
                        <FootTag2 tag="Game" />
                        <FootTag2 tag="iPhone" />
                        <FootTag2 tag="TV" />
                        <FootTag2 tag="Macbook" />
                        <FootTag2 tag="Asus Laptops" />
                        <FootTag2 tag="SSD" />
                        <FootTag2 tag="Graphics Card" />
                        <FootTag2 tag="Power Bank" />
                        <FootTag2 tag="Smart TV" />
                        <FootTag2 tag="Speaker" />
                        <FootTag2 tag="Tablet" />
                        <FootTag2 tag="Microwave" />
                        <FootTag2 tag="Samsung" />
                     </div>
                  </div>
               </div>

               <div>

                  <div className=" grid grid-cols-4 gap-4">
                     {pdt.map((item, idx) => (
                        <div
                           key={idx}
                           className="h-80 max-w-[234px] outline-0 bg-[#FFFFFF] border border-[#E4E7E9] rounded-sm p-4  hover:shadow-[0px_8px_24px_0px_rgba(25,28,31,0.12)] transition-all duration-300 cursor-pointer flex flex-col ">
                           <div className="w-[202px] flex flex-col items-center h-[172px] rounded-sm hover:bg-black/20 relative group">
                              <img
                                 src={item.images[0]}
                                 alt={item.title}
                                 className="h-[172px] p-2"
                              />
                              <div className="flex items-center gap-2 absolute top-[70px]  z-9999">
                                 <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 
                                                       ${
                                                          favIcon[item.id]
                                                             ? "bg-[#FA8232] text-white"
                                                             : "bg-white text-[#191C1F] hover:bg-[#FA8232] hover:text-white"
                                                       } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    onClick={() => toggleFav(item.id)}>
                                    {favIcon[item.id] ? (
                                       <GoHeartFill className="text-[24px]" />
                                    ) : (
                                       <GoHeart className="text-[24px]" />
                                    )}
                                 </div>

                                 <div className="w-12 h-12 inset-0 bg-white text-[#191C1F] rounded-full flex items-center justify-center hover:bg-[#FA8232] hover:text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiShoppingCart className="text-[24px] mx-auto my-auto cursor-pointer" />
                                 </div>
                                 <div className="w-12 h-12 inset-0 bg-white text-[#191C1F] rounded-full flex items-center justify-center hover:bg-[#FA8232] hover:text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiEye className="text-[24px] mx-auto my-auto cursor-pointer" />
                                 </div>
                              </div>
                           </div>

                           <div className="mt-6 ">
                              <div className="flex items-center gap-1">
                                 <div className="flex items-center gap-0.5 text-[16px] text-[#FA8232]">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                 </div>
                                 <h3 className="font-pub font-normal text-[12px] leading-4 text-[#77878F]">
                                    ({item.rating})
                                 </h3>
                              </div>

                              <h3 className="mt-2 font-pub font-normal text-[14px] leading-5 text-[#191C1F] line-clamp-2 text-start">
                                 {item.title}
                              </h3>
                              <div className="flex items-center gap-[2px]">
                                 <del className="mt-2 font-pub font-normal text-[14px] leading-5 text-[#929FA5] text-start">
                                    ${item.price}
                                 </del>
                                 <h3 className="mt-2 font-pub font-semibold text-[14px] leading-5 text-[#2DA5F3] text-start">
                                    $
                                    {(
                                       item.price *
                                       (1 - item.discountPercentage / 100)
                                    ).toFixed(2)}
                                 </h3>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Shop;
