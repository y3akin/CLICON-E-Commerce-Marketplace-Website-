import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../Layouts/Container";
import { ProductContext } from "../Context/ProductContext";
import { FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Favorites = () => {
  const { favorites, addToCart, removeFavorite } = useContext(ProductContext);
  const favArray = Object.values(favorites || {});

  return (
    <section>
      <div className="bg-[#F2F4F5] py-[26px]">
        <div className="w-[1320px] mx-auto flex items-center gap-2">
          <Link to="/" className="font-int text-[14px] text-[#666666] flex items-center gap-2 hover:text-[#2DA5F3]"><IoHomeOutline /> Home</Link>
          <MdKeyboardArrowRight className="text-[#666666]" />
          <span className="text-[#2DA5F3] text-[14px]">Favorites</span>
        </div>
      </div>

      <Container>
        <div className="my-12">
          <h1 className="font-pub text-[28px] font-semibold text-mtext mb-6">Your Favorites</h1>

          {favArray.length === 0 ? (
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-12 text-center">
              <p className="font-pub text-[18px] font-semibold text-mtext mb-4">No favorites yet</p>
              <p className="font-int text-[14px] text-[#77878F] mb-6">Add products to your favorites and they will appear here.</p>
              <Link to="/shop" className="inline-block bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-8 py-3 rounded-[3px] transition-all">Browse Products</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favArray.map((item) => (
                <div key={item.id} className="bg-white border border-[#E4E7E9] rounded-[5px] p-4 flex flex-col">
                  <Link to={`/product/${item.id}`} className="block h-[220px] bg-[#F2F4F5] rounded-[3px] overflow-hidden mb-4">
                    <img src={item.thumbnail || item.images?.[0]} alt={item.title} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1">
                    <p className="font-pub font-semibold text-mtext mb-2 line-clamp-2">{item.title}</p>
                    <p className="font-int text-[12px] text-[#77878F] mb-3">{item.brand || ""}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button onClick={() => addToCart(item)} className="flex items-center gap-2 bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-4 py-2 rounded-[3px] cursor-pointer transition-all">
                      <FiShoppingCart /> Add to Cart
                    </button>
                    <button onClick={() => removeFavorite(item.id)} className="text-[#2DA5F3] font-pub font-medium cursor-pointer">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Favorites;
