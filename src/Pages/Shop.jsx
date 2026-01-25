import React, { useContext, useState } from "react";
import Container from "../Layouts/Container";
import ShopCatg from "../Components/ShopCatg";
import PriceRange from "../Components/PriceRange";
import PopBrand from "../Components/PopBrand";
import FootTag2 from "../Components/UI/FootTag2";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline, IoStar, IoStarHalf } from "react-icons/io5";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
   const { product, addToCart, favorites, toggleFavorite } = useContext(ProductContext);

  return (
    <section className="animate-fadeIn">
      <div className="bg-[#F2F4F5] py-[16px] sm:py-[20px] md:py-[26px] animate-slideInDown">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="font-int text-[11px] sm:text-[12px] md:text-[14px] text-[#666666] leading-4 sm:leading-5 flex items-center gap-2 hover:underline hover:text-[#2DA5F3] transition-all duration-300 hover-scale">
            <IoHomeOutline className="text-xs sm:text-sm" /> Home
          </Link>
          <MdKeyboardArrowRight className="text-[11px] sm:text-[12px] md:text-[14px] text-[#666666]" />
          <Link to="/shop" className="font-int text-[11px] sm:text-[12px] md:text-[14px] text-[#2DA5F3] leading-4 sm:leading-5">Shop</Link>
        </div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-3 md:gap-4 lg:gap-6 pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-12 md:pb-16 lg:pb-18">
<div className="w-full lg:w-[312px] flex flex-col gap-3 md:gap-4 lg:gap-6 animate-fadeInLeft">
                  <div className="border-b border-[#E4E7E9] pb-3 md:pb-4 lg:pb-6 hover-lift transition-smooth">
                     <h2 className="font-pub font-medium text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-5 md:leading-6 text-mtext">
                        CATEGORY
                     </h2>
                     <div className="mt-3 flex flex-col gap-2 md:gap-3">
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

                  <div className="mt-6 border-b border-[#E4E7E9] pb-6 hover-lift transition-smooth">
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
          <div className="flex-1 animate-fadeInRight">
            <div className="grid grid-cols-4 gap-4">
              {product.map((item, idx) => (
                <div
                  key={item.id}
                  className={`h-80 max-w-[234px] bg-[#FFFFFF] border border-[#E4E7E9] rounded-sm p-4 hover:shadow-[0px_8px_24px_0px_rgba(25,28,31,0.12)] transition-all duration-300 flex flex-col animate-fadeInUp hover-lift ${["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6"][idx % 6]}`}
                >
                  <div className="w-[202px] h-[172px] relative group hover-scale transition-smooth">
                    <img src={item.images[0]} alt={item.title} className="h-[172px] p-2 mx-auto hover-scale transition-smooth" />
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:bg-[#00000020] transition-opacity duration-300 animate-fadeIn">
                                 <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover-scale transition-smooth ${
                                       favorites[item.id] ? "bg-[#FA8232] text-white" : "bg-white text-mtext hover:bg-[#FA8232] hover:text-white"
                                    }`}
                                    onClick={() => toggleFavorite(item)}
                                 >
                                    {favorites[item.id] ? <GoHeartFill className="text-[24px] animate-heartBeat" /> : <GoHeart className="text-[24px]" />}
                                 </div>
                      <div
                        className="w-12 h-12 rounded-full bg-white text-mtext flex items-center justify-center hover:bg-[#FA8232] hover:text-white cursor-pointer transition-all duration-300 hover-scale active:animate-jelly"
                        onClick={() => addToCart(item)}
                      >
                        <FiShoppingCart className="text-[24px]" />
                      </div>
                      <Link
                        to={`/product/${item.id}`}
                        className="w-12 h-12 rounded-full bg-white text-mtext flex items-center justify-center hover:bg-[#FA8232] hover:text-white cursor-pointer transition-all duration-300 hover-scale active:animate-jelly">
                        <FiEye className="text-[24px]" />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 animate-fadeIn">
                    <div className="flex items-center gap-1">
                      <div className="flex text-[#FA8232]">
                        <IoStar className="hover-scale transition-smooth" /><IoStar className="hover-scale transition-smooth" /><IoStar className="hover-scale transition-smooth" /><IoStar className="hover-scale transition-smooth" /><IoStarHalf className="hover-scale transition-smooth" />
                      </div>
                      <span className="text-[12px] text-[#77878F]">({item.rating})</span>
                    </div>
                    <h3 className="mt-2 text-[14px] line-clamp-2 hover-brighten transition-smooth cursor-pointer">{item.title}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      <del className="text-[14px] text-[#929FA5]">${item.price}</del>
                      <span className="text-[14px] font-semibold text-[#2DA5F3]">
                        ${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}
                      </span>
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