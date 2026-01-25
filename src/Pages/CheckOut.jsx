import React, { useContext, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Layouts/Container";
import { ProductContext } from "../Context/ProductContext";
import venmoLogo from "../assets/venmo.png";
import paypalLogo from "../assets/paypal.png";
import amazonLogo from "../assets/amazon.png";

// SVG Logo Components
const CodLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8Z" stroke="#16A34A" strokeWidth="2" fill="none"/>
    <path d="M3 8H21" stroke="#16A34A" strokeWidth="2"/>
    <circle cx="7" cy="13" r="2" fill="#16A34A"/>
    <path d="M12 11V15M15 11V15" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const VenmoLogo = () => (
  <img src={venmoLogo} alt="Venmo" width="30" height="30" className="object-contain" />
);

const PayPalLogo = () => (
  <img src={paypalLogo} alt="PayPal" width="30" height="30" className="object-contain" />
);

const AmazonPayLogo = () => (
  <img src={amazonLogo} alt="Amazon Pay" width="30" height="30" className="object-contain" />
);

const CardLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="1.5" stroke="#0066CC" strokeWidth="1.5" fill="none"/>
    <path d="M2 10H22" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="7" cy="16" r="1" fill="#0066CC"/>
    <path d="M11 16H18" stroke="#0066CC" strokeWidth="1"/>
  </svg>
);

const CheckOut = () => {
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    region: "",
    city: "",
    street: "",
    zipCode: "",
    companyName: "",
    orderNote: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subTotal = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  const TAX_RATE = 0.02;
  const tax = subTotal * TAX_RATE;
  const total = subTotal + tax;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.city ||
      !formData.street ||
      !formData.zipCode
    ) {
      alert("Please fill in all required fields");
      return;
    }
    if (paymentMethod === "card" && (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCvc)) {
      alert("Please fill in all card details");
      return;
    }

    // Prepare cart items for order
    const orderItems = cart.map((item) => ({
      name: item.title,
      quantity: item.quantity || 1,
      price: `$${(item.price * (item.quantity || 1)).toFixed(2)}`,
      image: item.thumbnail,
    }));

    // Navigate to order success page with order data
    navigate("/ordersuccess", {
      state: {
        items: orderItems,
        total: `$${total.toFixed(2)}`,
        billingInfo: formData,
        paymentMethod: paymentMethod,
      },
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      region: "",
      city: "",
      street: "",
      zipCode: "",
      companyName: "",
      orderNote: "",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    });
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
          <span className="text-[#2DA5F3] text-[14px]">CheckOut</span>
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
          {/* LEFT & CENTER: Billing + Payment */}
          <div className="lg:col-span-2 bg-white border border-[#E4E7E9] rounded-[5px] p-8">
            <form onSubmit={handlePlaceOrder}>
              {/* Billing Information */}
              <h2 className="font-pub text-[22px] font-semibold mb-6 text-mtext">
                Billing Information
              </h2>

              {/* Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Last name"
                    required
                  />
                </div>
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                  placeholder="Address"
                  required
                />
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Country"
                    required
                  />
                </div>
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Region/State
                  </label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Region/State"
                  />
                </div>
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Zip Code"
                    required
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              {/* Payment Options */}
              <h3 className="font-pub text-[18px] font-semibold mb-6 text-mtext">
                Payment Option
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { id: "cod", label: "Cash on Delivery", icon: <CodLogo /> },
                  { id: "venmo", label: "Venmo", icon: <VenmoLogo /> },
                  { id: "paypal", label: "PayPal", icon: <PayPalLogo /> },
                  { id: "amazon", label: "Amazon Pay", icon: <AmazonPayLogo /> },
                  { id: "card", label: "Debit/Credit Card", icon: <CardLogo /> },
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`border rounded-[3px] px-4 py-3 flex items-center gap-3 cursor-pointer font-int text-[14px] transition-all ${
                      paymentMethod === item.id
                        ? "border-[#FA8232] bg-orange-50"
                        : "border-[#E4E7E9] hover:border-[#2DA5F3]"
                    }`}>
                    <input
                      type="radio"
                      name="payment"
                      value={item.id}
                      checked={paymentMethod === item.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="cursor-pointer"
                    />
                    <span className="text-mtext font-medium flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Card Info - Conditional */}
              {paymentMethod === "card" && (
                <>
                  <div className="mb-4">
                    <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                      placeholder="Name on Card"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                      placeholder="Card Number"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                        Expiry (MM/YY)
                      </label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div>
                      <label className="font-pub text-[14px] font-medium text-[#475156] block mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Additional Information */}
              <h3 className="font-pub text-[18px] font-semibold mb-2 text-mtext">
                Additional Information
              </h3>
              <textarea
                name="orderNote"
                value={formData.orderNote}
                onChange={handleInputChange}
                className="input w-full border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all resize-none h-28"
                placeholder="Order notes (optional)"
              />
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 h-fit">
            <h2 className="font-pub text-[20px] font-semibold mb-6 text-mtext">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-[#77878F] mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="font-pub font-bold text-[14px] text-[#2DA5F3] border-2 border-[#2DA5F3] hover:bg-[#2DA5F3] hover:text-white transition-all duration-300 px-6 py-2 rounded inline-block">
                  Go to Shop
                </Link>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-[#E4E7E9]">
                      <img
                        src={item.images?.[0]}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-[3px] flex-shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="font-pub font-medium text-[14px] text-mtext line-clamp-2">
                            {item.title}
                          </p>
                          <p className="font-int text-[12px] text-[#77878F]">
                            x{item.quantity}
                          </p>
                        </div>
                        <span className="font-pub font-medium text-[14px] text-mtext">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-[#E4E7E9] pt-4 space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="font-pub text-[#5F6C72]">Sub-total</span>
                    <span className="font-pub font-medium text-mtext">
                      ${subTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-pub text-[#5F6C72]">Shipping</span>
                    <span className="font-pub font-medium text-green-600">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-pub text-[#5F6C72]">Tax</span>
                    <span className="font-pub font-medium text-mtext">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-[#E4E7E9] pt-4 mb-6 flex justify-between font-semibold text-lg">
                  <span className="text-mtext">Total</span>
                  <span className="text-[#FA8232]">${total.toFixed(2)}</span>
                </div>

                {/* Button */}
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold py-3 rounded-[3px] transition-all duration-300">
                  PLACE ORDER →
                </button>

                <Link
                  to="/cart"
                  className="mt-3 w-full border-2 border-[#2DA5F3] font-pub font-bold text-[16px] text-[#2DA5F3] py-3 rounded-[3px] hover:bg-[#2DA5F3] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center">
                  Back to Cart
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
