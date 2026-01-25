import React, { useContext, useState } from "react";
import { IoHomeOutline, IoStar, IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../Layouts/Container";
import { ProductContext } from "../Context/ProductContext";
import { FiShoppingCart, FiEye } from "react-icons/fi";

const Compare = () => {
  const { product, addToCart } = useContext(ProductContext);
  const [compareList, setCompareList] = useState([
    product[0],
    product[1],
    product[2],
  ]);

  const removeFromCompare = (id) => {
    setCompareList(compareList.filter((item) => item.id !== id));
  };

  const addAllToCart = () => {
    compareList.forEach((item) => {
      addToCart(item);
    });
    alert("All products added to cart!");
  };

  return (
    <section>
      {/* Breadcrumb */}
      <div className="bg-[#F2F4F5] py-[26px]">
        <div className="w-[1320px] mx-auto flex items-center gap-2">
          <Link
            to="/"
            className="font-int text-[14px] text-[#666666] flex items-center gap-2 hover:text-[#2DA5F3]">
            <IoHomeOutline /> Home
          </Link>
          <MdKeyboardArrowRight className="text-[#666666]" />
          <span className="text-[#2DA5F3] text-[14px]">Compare</span>
        </div>
      </div>

      <Container>
        <div className="my-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-pub text-[32px] font-semibold text-mtext mb-2">
              Compare Products
            </h1>
            <p className="font-int text-[14px] text-[#77878F]">
              Easily compare specifications and prices of multiple products
            </p>
          </div>

          {/* Empty State */}
          {compareList.length === 0 ? (
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-12 text-center">
              <p className="font-pub text-[18px] font-semibold text-mtext mb-4">
                No Products to Compare
              </p>
              <p className="font-int text-[14px] text-[#77878F] mb-6">
                Add products to compare their specifications and features
              </p>
              <Link
                to="/shop"
                className="inline-block bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-8 py-3 rounded-[3px] transition-all">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] overflow-hidden">
              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F2F4F5] border-b border-[#E4E7E9]">
                      <th className="text-left p-6 font-pub font-semibold text-mtext w-[200px]">
                        Product
                      </th>
                      {compareList.map((item) => (
                        <th key={item.id} className="text-center p-6 w-[250px]">
                          <div className="relative">
                            <button
                              onClick={() => removeFromCompare(item.id)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-[#FA8232] text-white rounded-full flex items-center justify-center hover:bg-[#d76e28] transition-all">
                              <IoClose size={16} />
                            </button>
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-[150px] object-cover rounded-[3px] mb-3"
                            />
                            <p className="font-pub font-semibold text-[14px] text-mtext mb-2">
                              {item.title}
                            </p>
                            <p className="font-pub text-[#FA8232] font-bold text-[16px]">
                              ${item.price}
                            </p>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Rating */}
                    <tr className="border-b border-[#E4E7E9] hover:bg-[#F2F4F5] transition-all">
                      <td className="p-6 font-pub font-medium text-[14px] text-mtext">
                        Rating
                      </td>
                      {compareList.map((item) => (
                        <td key={item.id} className="text-center p-6">
                          <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center gap-1 text-[#FA8232]">
                              {[...Array(5)].map((_, i) => (
                                <IoStar
                                  key={i}
                                  size={14}
                                  fill={
                                    i < Math.floor(item.rating)
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              ))}
                            </div>
                            <span className="font-int text-[12px] text-[#77878F]">
                              {item.rating}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Stock Status */}
                    <tr className="border-b border-[#E4E7E9] hover:bg-[#F2F4F5] transition-all">
                      <td className="p-6 font-pub font-medium text-[14px] text-mtext">
                        Stock Status
                      </td>
                      {compareList.map((item) => (
                        <td key={item.id} className="text-center p-6">
                          <span
                            className={`inline-block px-3 py-1 rounded-[3px] font-int text-[12px] font-medium ${
                              item.stock > 0
                                ? "bg-[#D4EDDA] text-[#155724]"
                                : "bg-[#F8D7DA] text-[#721C24]"
                            }`}>
                            {item.stock > 0 ? "In Stock" : "Out of Stock"}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Brand */}
                    <tr className="border-b border-[#E4E7E9] hover:bg-[#F2F4F5] transition-all">
                      <td className="p-6 font-pub font-medium text-[14px] text-mtext">
                        Brand
                      </td>
                      {compareList.map((item) => (
                        <td
                          key={item.id}
                          className="text-center p-6 font-int text-[14px] text-[#77878F]">
                          {item.brand || "N/A"}
                        </td>
                      ))}
                    </tr>

                    {/* Category */}
                    <tr className="border-b border-[#E4E7E9] hover:bg-[#F2F4F5] transition-all">
                      <td className="p-6 font-pub font-medium text-[14px] text-mtext">
                        Category
                      </td>
                      {compareList.map((item) => (
                        <td
                          key={item.id}
                          className="text-center p-6 font-int text-[14px] text-[#77878F]">
                          {item.category}
                        </td>
                      ))}
                    </tr>

                    {/* Description */}
                    <tr className="border-b border-[#E4E7E9] hover:bg-[#F2F4F5] transition-all">
                      <td className="p-6 font-pub font-medium text-[14px] text-mtext">
                        Description
                      </td>
                      {compareList.map((item) => (
                        <td
                          key={item.id}
                          className="text-center p-6 font-int text-[12px] text-[#77878F] max-w-[250px]">
                          {item.description?.substring(0, 100)}...
                        </td>
                      ))}
                    </tr>

                    {/* Action Buttons */}
                    <tr className="bg-[#F2F4F5]">
                      <td className="p-6"></td>
                      {compareList.map((item) => (
                        <td key={item.id} className="text-center p-6">
                          <div className="flex gap-2 flex-col">
                            <button
                              onClick={() => addToCart(item)}
                              className="flex items-center justify-center gap-2 bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-4 py-2 rounded-[3px] transition-all text-[12px]">
                              <FiShoppingCart size={14} />
                              Add to Cart
                            </button>
                            <Link
                              to={`/product/${item.id}`}
                              className="flex items-center justify-center gap-2 border border-[#2DA5F3] text-[#2DA5F3] hover:bg-[#2DA5F3] hover:text-white font-pub font-bold px-4 py-2 rounded-[3px] transition-all text-[12px]">
                              <FiEye size={14} />
                              View Details
                            </Link>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer Action */}
              <div className="bg-[#F2F4F5] border-t border-[#E4E7E9] p-6 flex items-center justify-between">
                <p className="font-int text-[14px] text-[#77878F]">
                  Comparing {compareList.length} product{compareList.length !== 1 ? "s" : ""}
                </p>
                <button
                  onClick={addAllToCart}
                  className="bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-8 py-3 rounded-[3px] transition-all">
                  Add All to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Compare;
