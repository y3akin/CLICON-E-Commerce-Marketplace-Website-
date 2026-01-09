import React, { useContext } from "react";
import { IoHomeOutline, IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../Layouts/Container";
import Flex from "../Components/UI/Flex";
import { ProductContext } from "../Context/ProductContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);

  const subTotal = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  const shipping = cart.length > 0 ? 2.0 : 0;
  const total = subTotal + shipping;

  return (
    <section>
      <div className="bg-[#F2F4F5] py-[26px]">
        <div className="w-[1320px] mx-auto flex items-center gap-2">
          <Link to="/" className="font-int text-[14px] text-[#666666] flex items-center gap-2 hover:text-[#2DA5F3]">
            <IoHomeOutline /> Home
          </Link>
          <MdKeyboardArrowRight className="text-[#666666]" />
          <span className="text-[#2DA5F3] text-[14px]">Cart</span>
        </div>
      </div>

      <Container>
        <Flex className="my-[72px]">
          <div className="w-[872px] border border-[#E4E7E9]">
            <div className="flex justify-between px-6 py-5">
              <h2 className="text-[18px] font-medium">Shopping Cart</h2>
              <Link to="/shop" className="bg-[#2DA5F3] text-white px-4 py-2 rounded">Go to Shop</Link>
            </div>

            {cart.length === 0 ? (
              <div className="py-20 text-center">
                <h3 className="text-[22px] font-semibold mb-4">Your cart is empty</h3>
                <p className="text-[#77878F] mb-6">Zero items. Zero regrets. Fix it by shopping.</p>
                <Link to="/shop" className="bg-[#2DA5F3] text-white px-8 py-3 rounded">Go to Shop</Link>
              </div>
            ) : (
              <>
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F2F4F5]">
                      <th className="px-6 py-4 text-left">PRODUCT</th>
                      <th className="px-6 py-4 text-left">PRICE</th>
                      <th className="px-6 py-4 text-left">QUANTITY</th>
                      <th className="px-6 py-4 text-left">SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id} >
                        <td className="px-6 py-4 flex gap-4 items-center ">
                          <button className="text-[#929FA5] border border-[#929FA5] hover:border-red-600 hover:text-red-600 rounded-full" onClick={() => removeFromCart(item.id)}><IoClose /></button>
                          <img src={item.images?.[0]} alt={item.title} className="w-20 h-20 object-cover" />
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-[#77878F]">{item.brand}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-4 border border-[#929FA5] text-[18px] w-[148px] h-10">
                            <button className="text-[20px] text-[#191C1F] hover:text-[#929FA5]" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button className="text-[20px] text-[#191C1F] hover:text-[#929FA5]" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                        </td>
                        <td className="px-6 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-6 py-6 text-right">
                  <p>Subtotal: ${subTotal.toFixed(2)}</p>
                  <p>Shipping: ${shipping.toFixed(2)}</p>
                  <h3 className="font-semibold">Total: ${total.toFixed(2)}</h3>
                </div>
              </>
            )}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cart;