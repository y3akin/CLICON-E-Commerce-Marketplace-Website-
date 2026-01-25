import React, { useContext, useState } from "react";
import Container from "../../Layouts/Container";
import Pdt_Img from "../../assets/Products/img1.jpg";
import { FaArrowRight } from "react-icons/fa";
import PdtNavList from "../../Components/UI/PdtNavList";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FiShoppingCart, FiEye } from "react-icons/fi";

const Products = () => {
   let { product, addToCart, favorites, toggleFavorite } = useContext(ProductContext);

   const handleaddToCart = (item) => {
      addToCart(item);
   }

   return (
      <section className="my-[30px] sm:my-[50px] md:my-[60px] lg:my-[72px]">
         <Container>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4 md:gap-6">
               <div className="w-full lg:w-[312px] bg-[#F3DE6D] rounded-[3px]">
                  <div className="pt-4 sm:pt-6 md:pt-8 px-3 sm:px-4 md:px-[18px] text-center">
                     <h5 className="font-pub font-semibold text-[11px] sm:text-[12px] md:text-[14px] leading-4 sm:leading-5 text-[#BE4646]">
                        COMPUTER & ACCESSORIES
                     </h5>
                     <h5 className="mt-2 font-pub font-semibold text-[20px] sm:text-[26px] md:text-[32px] leading-7 sm:leading-8 md:leading-10 text-mtext">
                        32% Discount
                     </h5>
                     <h5 className="mt-2 md:mt-3 font-pub font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-5 sm:leading-6 text-[#475156]">
                        For all ellectronics products
                     </h5>
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mt-3 md:mt-4">
                        <h3 className="font-int font-normal text-[11px] sm:text-[12px] md:text-[14px] leading-4 sm:leading-5 text-mtext">
                           Offers ends in:
                        </h3>
                        <h3 className="font-pub font-semibold text-[11px] sm:text-[12px] md:text-[14px] leading-4 sm:leading-5 text-mtext py-1 sm:py-1.5 px-2 sm:px-2.5 bg-[#FFFFFF] rounded-xs">
                           ENDS OF CHRISTMAS
                        </h3>
                     </div>
                  </div>
                  <Link to="shop" className="w-[120px] sm:w-[160px] md:w-[191px] mx-auto justify-center rounded-xs mt-4 sm:mt-6 md:mt-8 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[12px] sm:text-[14px] md:text-[16px] leading-4 sm:leading-5 md:leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200">
                     Shop Now <FaArrowRight className="text-xs sm:text-sm md:text-base" />
                  </Link>
                  <img src={Pdt_Img} alt="Pdt_Img" className="w-full h-auto" />
               </div>
               <div className="w-full lg:w-[984px]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 md:mb-6">
                     <h2 className="font-pub font-semibold text-[18px] sm:text-[20px] md:text-[24px] leading-7 sm:leading-8 md:leading-8 text-mtext">
                        Featured Products
                     </h2>

                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
                        <ul className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4">
                           <PdtNavList pdtList={"All Product"} />
                           <PdtNavList pdtList={"Smart Phone"} />
                           <PdtNavList pdtList={"Laptop"} />
                           <PdtNavList pdtList={"Headphone"} />
                           <PdtNavList pdtList={"TV"} />
                        </ul>
                        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer font-pub font-semibold text-[11px] sm:text-[12px] md:text-[14px] leading-4 sm:leading-5 text-[#FA8232] hover:underline">
                           <Link to="shop">Browse All Product</Link>
                           <FaArrowRight className="text-xs" />
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6">
                     {product.slice(2,10).map((item, idx) => (
                        <div
                           key={idx}
                           className="h-auto max-w-full outline-0 bg-[#FFFFFF] border border-[#E4E7E9] rounded-sm p-2 md:p-3 lg:p-4 hover:shadow-[0px_8px_24px_0px_rgba(25,28,31,0.12)] transition-all duration-300 cursor-pointer flex flex-col">
                           <div className="w-full flex flex-col items-center h-[120px] sm:h-[140px] md:h-[160px] lg:h-[172px] rounded-sm hover:bg-black/20 relative group">
                              <img
                                 src={item.images[0]}
                                 alt={item.title}
                                 className="h-full p-1 sm:p-2 w-full object-contain"
                              />
                              <div className="flex items-center gap-1 sm:gap-2 absolute top-1/2 -translate-y-1/2 z-9999">
                                 <div
                                    className={`w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full flex items-center justify-center cursor-pointer 
                                       ${
                                          favorites[item.id]
                                             ? "bg-[#FA8232] text-white"
                                             : "bg-white text-mtext hover:bg-[#FA8232] hover:text-white"
                                       } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    onClick={() => toggleFavorite(item)}>
                                    {favorites[item.id] ? (
                                       <GoHeartFill className="text-[16px] sm:text-[18px] md:text-[24px]" />
                                    ) : (
                                       <GoHeart className="text-[16px] sm:text-[18px] md:text-[24px]" />
                                    )}
                                 </div>

                                 <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 inset-0 bg-white text-mtext rounded-full flex items-center justify-center hover:bg-[#FA8232] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiShoppingCart onClick={() => handleaddToCart(item)} className="text-[16px] sm:text-[18px] md:text-[24px] cursor-pointer" />
                                 </div>
                                 <Link to={`/product/${item.id}`} className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 inset-0 bg-white text-mtext rounded-full flex items-center justify-center hover:bg-[#FA8232] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiEye className="text-[16px] sm:text-[18px] md:text-[24px] cursor-pointer" />
                                 </Link>
                              </div>
                           </div>

                           <div className="mt-2 md:mt-3 lg:mt-6">
                              <div className="flex items-center gap-1">
                                 <div className="flex items-center gap-0.5 text-[12px] sm:text-[14px] md:text-[16px] text-[#FA8232]">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                 </div>
                                 <h3 className="font-pub font-normal text-[9px] sm:text-[10px] md:text-[12px] leading-3 sm:leading-4 text-[#77878F]">
                                    ({item.rating})
                                 </h3>
                              </div>

                              <h3 className="mt-1 md:mt-2 font-pub font-normal text-[11px] sm:text-[12px] md:text-[14px] leading-4 sm:leading-5 text-mtext line-clamp-2 text-start">
                              </h3>
                              <div className="flex items-center gap-0.5">
                                 <del className="mt-1 md:mt-2 font-pub font-normal text-[10px] sm:text-[11px] md:text-[14px] leading-4 sm:leading-5 text-[#929FA5] text-start">
                                 ${item.price}
                              </del>
                                 <h3 className="mt-1 md:mt-2 font-pub font-semibold text-[11px] sm:text-[12px] md:text-[14px] leading-4 sm:leading-5 text-[#2DA5F3] text-start">
                                 ${ (item.price * (1 - item.discountPercentage / 100)).toFixed(2) }
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

export default Products;
