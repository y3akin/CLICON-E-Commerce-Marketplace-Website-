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
   let { product, addToCart } = useContext(ProductContext);

   const handleaddToCart = (item) => {
      addToCart(item);
   }

   let [favIcon, setFavIcon] = useState({});
   const toggleFav = (id) => {
      setFavIcon((prev) => ({
         ...prev,
         [id]: !prev[id],
      }));
   };

   return (
      <section className="my-[72px]">
         <Container>
            <div className="flex items-start justify-between">
               <div className="w-[312px] bg-[#F3DE6D] rounded-[3px]">
                  <div className="pt-8 px-[18px] text-center">
                     <h5 className="font-pub font-semibold text-[14px] leading-5 text-[#BE4646]">
                        COMPUTER & ACCESSORIES
                     </h5>
                     <h5 className="mt-2 font-pub font-semibold text-[32px] leading-10 text-mtext">
                        32% Discount
                     </h5>
                     <h5 className="mt-3 font-pub font-normal text-[16px] leading-6 text-[#475156]">
                        For all ellectronics products
                     </h5>
                     <div className="flex items-center gap-2 mt-4">
                        <h3 className="font-int font-normal text-[14px] leading-5 text-mtext">
                           Offers ends in:
                        </h3>
                        <h3 className="font-pub font-semibold text-[14px] leading-5 text-mtext py-1.5 px-2.5 bg-[#FFFFFF] rounded-xs">
                           ENDS OF CHRISTMAS
                        </h3>
                     </div>
                  </div>
                  <Link to="shop" className="w-[191px] mx-auto justify-center rounded-xs mt-8 bg-[#FA8232] flex items-center gap-2 text-[#FFFFFF] font-pub font-bold text-[16px] leading-14 tracking-[1.2%] cursor-pointer hover:bg-[#f86909] transition-all duration-200">
                     Shop Now <FaArrowRight />
                  </Link>
                  <img src={Pdt_Img} alt="Pdt_Img" />
               </div>
               <div className="w-[984px]">
                  <div className="flex items-center justify-between">
                     <h2 className="font-pub font-semibold text-[24px] leading-8 text-mtext">
                        Featured Products
                     </h2>

                     <div className="flex items-center gap-4">
                        <ul>
                           <PdtNavList pdtList={"All Product"} />
                           <PdtNavList pdtList={"Smart Phone"} />
                           <PdtNavList pdtList={"Laptop"} />
                           <PdtNavList pdtList={"Headphone"} />
                           <PdtNavList pdtList={"TV"} />
                        </ul>
                        <div className="flex items-center gap-2 cursor-pointer font-pub font-semibold text-[14px] leading-5 text-[#FA8232] hover:underline">
                           <Link to="shop" >Browse All Product</Link>
                           <FaArrowRight />
                        </div>
                     </div>
                  </div>

                  <div className=" grid grid-cols-4 gap-4 mt-6">
                     {product.slice(2,10).map((item, idx) => (
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
                                             : "bg-white text-mtext hover:bg-[#FA8232] hover:text-white"
                                       } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    onClick={() => toggleFav(item.id)}>
                                    {favIcon[item.id] ? (
                                       <GoHeartFill className="text-[24px]" />
                                    ) : (
                                       <GoHeart className="text-[24px]" />
                                    )}
                                 </div>

                                 <div className="w-12 h-12 inset-0 bg-white text-mtext rounded-full flex items-center justify-center hover:bg-[#FA8232] hover:text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiShoppingCart onClick={() => handleaddToCart(item)} className="text-[24px] mx-auto my-auto cursor-pointer" />
                                 </div>
                                 <div className="w-12 h-12 inset-0 bg-white text-mtext rounded-full flex items-center justify-center hover:bg-[#FA8232] hover:text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                              <h3 className="mt-2 font-pub font-normal text-[14px] leading-5 text-mtext line-clamp-2 text-start">
                                 {item.title}
                              </h3>
                              <div className="flex items-center gap-0.5">
                                 <del className="mt-2 font-pub font-normal text-[14px] leading-5 text-[#929FA5] text-start">
                                 ${item.price}
                              </del>
                                 <h3 className="mt-2 font-pub font-semibold text-[14px] leading-5 text-[#2DA5F3] text-start">
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
