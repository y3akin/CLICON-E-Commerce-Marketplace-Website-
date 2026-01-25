import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoHomeOutline, IoStar, IoStarHalf, IoHeart, IoHeartOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import Container from "../Layouts/Container";
import { ProductContext } from "../Context/ProductContext";

const ProductView = () => {
  const { id } = useParams();
  const { product, addToCart, favorites, toggleFavorite } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const currentProduct = product.find((p) => p.id === parseInt(id));

  if (!currentProduct) {
    return (
      <section>
        <Container>
          <div className="my-12 text-center">
            <p className="font-pub text-[24px] font-semibold text-mtext mb-4">
              Product Not Found
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-8 py-3 rounded-[3px] transition-all">
              Back to Shop
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const images = [currentProduct.thumbnail, ...(currentProduct.images || [])];
  const relatedProducts = product.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(currentProduct);
    }
    alert(`${quantity} item(s) added to cart!`);
    setQuantity(1);
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
          <Link
            to="/shop"
            className="font-int text-[14px] text-[#666666] hover:text-[#2DA5F3]">
            Shop
          </Link>
          <MdKeyboardArrowRight className="text-[#666666]" />
          <span className="text-[#2DA5F3] text-[14px]">{currentProduct.title}</span>
        </div>
      </div>

      <Container>
        <div className="py-12">
          {/* Product Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-[#F2F4F5] rounded-[5px] p-4 border border-[#E4E7E9] h-[400px] flex items-center justify-center overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={currentProduct.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-full h-[80px] rounded-[3px] border-2 p-2 transition-all ${
                      selectedImage === index
                        ? "border-[#FA8232]"
                        : "border-[#E4E7E9] hover:border-[#2DA5F3]"
                    }`}>
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover rounded-[2px]"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="font-pub text-[28px] font-semibold text-mtext mb-3">
                  {currentProduct.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-[#FA8232]">
                    {[...Array(5)].map((_, i) => (
                      <IoStar
                        key={i}
                        size={16}
                        fill={
                          i < Math.floor(currentProduct.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-int text-[14px] text-[#77878F]">
                    ({currentProduct.rating} / 5)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-pub text-[32px] font-bold text-[#FA8232]">
                    ${currentProduct.price}
                  </span>
                  {currentProduct.discountPercentage && (
                    <span className="bg-[#FFE5D5] text-[#FA8232] px-3 py-1 rounded-[3px] font-pub font-bold text-[12px]">
                      -{currentProduct.discountPercentage}%
                    </span>
                  )}
                </div>

                <p className="font-int text-[14px] text-[#77878F] border-b border-[#E4E7E9] pb-4">
                  {currentProduct.description}
                </p>
              </div>

              {/* Stock Status */}
              <div className="bg-[#F2F4F5] p-4 rounded-[3px] border border-[#E4E7E9]">
                <p className="font-int text-[12px] text-[#77878F] mb-2">Availability</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      currentProduct.stock > 0 ? "bg-[#00B386]" : "bg-[#FA8232]"
                    }`}></span>
                  <span className="font-pub font-semibold text-mtext">
                    {currentProduct.stock > 0
                      ? `In Stock (${currentProduct.stock} available)`
                      : "Out of Stock"}
                  </span>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E4E7E9] rounded-[3px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center font-bold text-[#FA8232] hover:bg-[#F2F4F5] transition-all">
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-x border-[#E4E7E9] font-pub font-semibold outline-0"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center font-bold text-[#FA8232] hover:bg-[#F2F4F5] transition-all">
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={currentProduct.stock <= 0}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FA8232] hover:bg-[#d76e28] disabled:bg-[#CCCCCC] text-white font-pub font-bold py-3 rounded-[3px] transition-all">
                  <FiShoppingCart size={18} />
                  Add to Cart
                </button>

                <button
                  onClick={() => toggleFavorite(currentProduct)}
                  className="w-12 h-12 flex items-center justify-center border border-[#E4E7E9] rounded-[3px] hover:bg-[#F2F4F5] transition-all">
                  {favorites[currentProduct.id] ? (
                    <IoHeart size={20} className="text-[#FA8232]" />
                  ) : (
                    <IoHeartOutline size={20} className="text-[#77878F]" />
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-[#E4E7E9] pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="font-int text-[14px] text-[#77878F]">
                    Brand:
                  </span>
                  <span className="font-pub font-semibold text-mtext">
                    {currentProduct.brand || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-int text-[14px] text-[#77878F]">
                    Category:
                  </span>
                  <span className="font-pub font-semibold text-mtext">
                    {currentProduct.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-int text-[14px] text-[#77878F]">
                    Weight:
                  </span>
                  <span className="font-pub font-semibold text-mtext">
                    {currentProduct.weight || "N/A"} kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Description */}
            <div className="lg:col-span-2 bg-white border border-[#E4E7E9] rounded-[5px] p-6">
              <h2 className="font-pub text-[20px] font-semibold text-mtext mb-4">
                Description
              </h2>
              <p className="font-int text-[14px] text-[#77878F] leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Warranty & Support */}
            <div className="bg-[#F2F4F5] border border-[#E4E7E9] rounded-[5px] p-6">
              <h3 className="font-pub text-[16px] font-semibold text-mtext mb-4">
                Product Info
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-int text-[12px] text-[#77878F] mb-1">
                    SKU
                  </p>
                  <p className="font-pub text-[14px] text-mtext">
                    {currentProduct.sku || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="font-int text-[12px] text-[#77878F] mb-1">
                    Return Policy
                  </p>
                  <p className="font-pub text-[14px] text-mtext">
                    30-day easy returns
                  </p>
                </div>
                <div>
                  <p className="font-int text-[12px] text-[#77878F] mb-1">
                    Warranty
                  </p>
                  <p className="font-pub text-[14px] text-mtext">
                    1 Year Warranty
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-pub text-[24px] font-semibold text-mtext mb-6">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="group bg-white border border-[#E4E7E9] rounded-[5px] overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Product Image */}
                    <div className="relative bg-[#F2F4F5] h-[250px] overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <p className="font-pub font-medium text-[14px] text-mtext mb-2 line-clamp-2">
                        {item.title}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex text-[#FA8232]">
                          {[...Array(5)].map((_, i) => (
                            <IoStar
                              key={i}
                              size={12}
                              fill={
                                i < Math.floor(item.rating)
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          ))}
                        </div>
                        <span className="font-int text-[11px] text-[#77878F]">
                          ({item.rating})
                        </span>
                      </div>

                      {/* Price */}
                      <p className="font-pub font-bold text-[#FA8232] text-[16px] mb-3">
                        ${item.price}
                      </p>

                      {/* Action Button */}
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(item);
                            alert("Added to cart!");
                          }}
                          className="flex-1 flex items-center justify-center gap-1 bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold text-[12px] py-2 rounded-[3px] transition-all">
                          <FiShoppingCart size={14} />
                          Add
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-1 border border-[#2DA5F3] text-[#2DA5F3] hover:bg-[#2DA5F3] hover:text-white font-pub font-bold text-[12px] py-2 rounded-[3px] transition-all">
                          <FiEye size={14} />
                          View
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProductView;
