import React, { useContext, useState } from "react";
import { IoHomeOutline, IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../Layouts/Container";
import Flex from "../Components/UI/Flex";
import { ProductContext } from "../Context/ProductContext";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

const Cart = () => {
   const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);

   const [couponCode, setCouponCode] = useState("");
   const [couponApplied, setCouponApplied] = useState(false);
   const [couponMessage, setCouponMessage] = useState("");

   const subTotal = cart.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
   );
   const shipping = cart.length > 0 ? 2.0 : 0;

   const TAX_RATE = 0.02;
   const discount = couponApplied ? subTotal * 0.05 : 0;
   const tax = Math.max(0, (subTotal - discount) * TAX_RATE);
   const total = subTotal - discount + shipping + tax;

   return (
      <section>
         <div className="bg-[#F2F4F5] py-[26px]">
            <div className="w-[1320px] mx-auto flex items-center gap-2">
               <Link
                  to="/"
                  className="font-int text-[14px] text-[#666666] flex items-center gap-2 hover:text-[#2DA5F3]">
                  <IoHomeOutline /> Home
               </Link>
               <MdKeyboardArrowRight className="text-[#666666]" />
               <span className="text-[#2DA5F3] text-[14px]">Cart</span>
            </div>
         </div>

         <Container>
            <div className="flex my-[72px] items-start justify-between ">
               <div className="w-[872px] border border-[#E4E7E9] rounded-[5px]">
                  <div className="flex justify-between px-6 py-5  border-b border-[#E4E7E9]">
                     <h2 className="font-pub text-[18px] font-medium leading-6 text-mtext">
                        Shopping Cart
                     </h2>
                  </div>

                  {cart.length === 0 ? (
                     <div className="py-20 text-center">
                        <h3 className="text-[22px] font-semibold mb-4">
                           Your cart is empty
                        </h3>
                        <p className="text-[#77878F] mb-6">
                           Zero items. Zero regrets. Fix it by shopping.
                        </p>
                        <Link
                           to="/shop"
                           className="font-pub font-bold text-[14px] leading-12 tracking-[1.2%] text-[#2DA5F3] border-2 border-[#2DA5F3] hover:bg-[#2DA5F3] hover:text-white transition-all duration-300 px-8 py-3 rounded cursor-pointer">
                           Go to Shop
                        </Link>
                     </div>
                  ) : (
                     <>
                        <table className="w-full ">
                           <thead>
                              <tr className="bg-[#F2F4F5]">
                                 <th className="font-pub font-medium text-[14px] text-[#475156] px-6 py-4 text-left">
                                    PRODUCT
                                 </th>
                                 <th className="font-pub font-medium text-[14px] text-[#475156] px-6 py-4 text-left">
                                    PRICE
                                 </th>
                                 <th className="font-pub font-medium text-[14px] text-[#475156] px-6 py-4 text-left">
                                    QUANTITY
                                 </th>
                                 <th className="font-pub font-medium text-[14px] text-[#475156] px-6 py-4 text-left">
                                    SUBTOTAL
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="border-b border-[#E4E7E9]">
                              {cart.map((item) => (
                                 <tr key={item.id}>
                                    <td className="px-6 py-6 flex gap-4 items-center ">
                                       <button
                                          className="text-[#929FA5] border border-[#929FA5] hover:border-red-600 hover:text-red-600 rounded-full cursor-pointer"
                                          onClick={() =>
                                             removeFromCart(item.id)
                                          }>
                                          <IoClose />
                                       </button>
                                       <img
                                          src={item.images?.[0]}
                                          alt={item.title}
                                          className="w-20 h-20 object-cover"
                                       />
                                       <div>
                                          <p className="font-medium">
                                             {item.title}
                                          </p>
                                          <p className="text-sm text-[#77878F]">
                                             {item.brand}
                                          </p>
                                       </div>
                                    </td>
                                    <td className="px-6 py-4">
                                       ${item.price.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4">
                                       <div className="flex items-center justify-center gap-4 border border-[#929FA5] text-[18px] w-[148px] h-10">
                                          <button
                                             className="text-[20px] text-[#191C1F] hover:text-[#929FA5] cursor-pointer"
                                             onClick={() =>
                                                updateQuantity(
                                                   item.id,
                                                   item.quantity - 1
                                                )
                                             }>
                                             -
                                          </button>
                                          <span>{item.quantity}</span>
                                          <button
                                             className="text-[20px] text-[#191C1F] hover:text-[#929FA5] cursor-pointer cursor-pointer"
                                             onClick={() =>
                                                updateQuantity(
                                                   item.id,
                                                   item.quantity + 1
                                                )
                                             }>
                                             +
                                          </button>
                                       </div>
                                    </td>
                                    <td className="px-6 py-4">
                                       $
                                       {(item.price * item.quantity).toFixed(2)}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                           <div className="p-6">
                              <Link
                                 to="/shop"
                                 className="flex items-center justify-center gap-3 font-pub font-bold text-[14px] leading-12 tracking-[1.2%] text-[#2DA5F3] border-2 border-[#2DA5F3] rounded px-0.5 py-px hover:bg-[#2DA5F3] hover:text-white transition-all duration-300">
                                 <FaArrowLeftLong /> Return to Shop
                              </Link>
                           </div>
                        </table>
                     </>
                  )}
               </div>

               <div className="w-[430px] flex flex-col gap-6">
                  <div className="border border-[#E4E7E9] p-6 rounded-[5px]">
                     <h3 className="font-pub font-medium text-[18px] leading-6 mb-5">
                        Card Totals
                     </h3>
                     <div className="space-y-2">
                        <div className="flex justify-between pb-3">
                           <span className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                              Subtotal
                           </span>
                           <span className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                              ${subTotal.toFixed(2)}
                           </span>
                        </div>
                        <div className="flex justify-between pb-3">
                           <span className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                              Shipping
                           </span>
                           <span className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                              Free
                           </span>
                        </div>
                        <div className="flex justify-between pb-3">
                           <span className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                              Tax
                           </span>
                           <span className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                              ${tax.toFixed(2)}
                           </span>
                        </div>
                        <div className="flex justify-between pb-3">
                           <span className="font-pub font-normal text-[14px] leading-5 text-[#5F6C72]">
                              Discount
                           </span>
                           <span className="font-pub font-medium text-[14px] leading-5 text-[#191C1F]">
                              {discount > 0 ? `- $${discount.toFixed(2)}` : "-"}
                           </span>
                        </div>
                        <div className="flex justify-between font-semibold border-t border-[#E4E7E9] pt-2">
                           <span>Total</span>
                           <span>${total.toFixed(2)} USD</span>
                        </div>
                     </div>
                     <Link to="/checkout" className="mt-6 w-full bg-[#FA8232] font-pub font-bold text-[16px] text-white py-3 rounded-[3px] hover:bg-[#d76e28] transition-all duration-300 cursor-pointer flex items-center justify-center gap-3">
                        Proceed to Checkout <FaArrowRight />
                     </Link>
                  </div>

                  <div className="border border-[#E4E7E9] p-6 rounded-[5px]">
                     <h3 className="font-pub font-medium text-[18px] leading-6 mb-5">
                        Card Totals
                     </h3>

                     <div className="flex flex-col items-start">
                        <input
                           type="text"
                           value={couponCode}
                           onChange={(e) => {
                              setCouponCode(e.target.value);
                              setCouponMessage(""); 
                           }}
                           className="font-pub font-normal text-[14px] leading-5 text-[#77878F] border border-[#E4E7E9] w-full px-4 py-3 rounded-[3px] outline-0"
                           placeholder="Coupon Code"
                        />

                        <button
                           className="mt-6 bg-[#2DA5F3] font-pub font-bold text-[16px] text-white px-8 py-3 rounded-[3px] hover:bg-[#1681c8] transition-all duration-300 cursor-pointer "
                           onClick={() => {
                              const code = couponCode.trim().toUpperCase();
                              if (code === "YS143") {
                                 setCouponApplied(true);
                                 setCouponMessage(
                                    "✨ Offer applied successfully. You’ve saved 5%."
                                 );
                              } else {
                                 setCouponApplied(false);
                                 setCouponMessage("Invalid coupon code");
                              }
                           }}>
                           Apply Coupon
                        </button>
                        {couponMessage && (
                           <p
                              className={`mt-2 font-medium text-sm text-[#5F6C72] ${
                                 couponApplied
                                    ? "text-green-600"
                                    : "text-red-600"
                              }`}>
                              {couponMessage}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Cart;
