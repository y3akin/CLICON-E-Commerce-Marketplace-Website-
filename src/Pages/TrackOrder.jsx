import React, { useState, useEffect } from "react";
import { IoHomeOutline, IoCheckmarkCircle } from "react-icons/io5";
import { MdKeyboardArrowRight, MdLocalShipping, MdDone } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import Container from "../Layouts/Container";

const TrackOrder = () => {
  const [orderCode, setOrderCode] = useState("");
  const [searched, setSearched] = useState(false);
  const [orderFound, setOrderFound] = useState(false);
  const [searchParams] = useSearchParams();
  const [allOrders, setAllOrders] = useState({});

  // Sample order data for demonstration
  const sampleOrders = {
    "#ORD123456": {
      orderNumber: "#ORD123456",
      date: "January 20, 2026",
      total: "$357.99",
      status: "In Transit",
      trackingId: "TRACK123456789",
      items: [
        { name: "Canon EOS 1500D DSLR", quantity: 1, price: "$70" },
        { name: "Gaming Headphones", quantity: 3, price: "$250" },
      ],
      timeline: [
        { step: "Order Confirmed", date: "Jan 20, 2026", completed: true },
        { step: "Processing", date: "Jan 21, 2026", completed: true },
        { step: "Shipped", date: "Jan 22, 2026", completed: true },
        { step: "In Transit", date: "Jan 24, 2026", completed: true, current: true },
        { step: "Out for Delivery", date: "Jan 27, 2026", completed: false },
        { step: "Delivered", date: "Jan 28, 2026", completed: false },
      ],
    },
    "#ORD789012": {
      orderNumber: "#ORD789012",
      date: "January 18, 2026",
      total: "$124.50",
      status: "Delivered",
      trackingId: "TRACK987654321",
      items: [
        { name: "Wireless Mouse", quantity: 2, price: "$50" },
        { name: "USB-C Cable", quantity: 1, price: "$12" },
      ],
      timeline: [
        { step: "Order Confirmed", date: "Jan 18, 2026", completed: true },
        { step: "Processing", date: "Jan 19, 2026", completed: true },
        { step: "Shipped", date: "Jan 19, 2026", completed: true },
        { step: "In Transit", date: "Jan 20, 2026", completed: true },
        { step: "Out for Delivery", date: "Jan 21, 2026", completed: true },
        { step: "Delivered", date: "Jan 21, 2026", completed: true, current: true },
      ],
    },
    "#ORD345678": {
      orderNumber: "#ORD345678",
      date: "January 22, 2026",
      total: "$899.99",
      status: "Processing",
      trackingId: "TRACK456789012",
      items: [
        { name: "Smart Watch Pro", quantity: 1, price: "$399" },
        { name: "Screen Protector", quantity: 2, price: "$30" },
      ],
      timeline: [
        { step: "Order Confirmed", date: "Jan 22, 2026", completed: true, current: true },
        { step: "Processing", date: "Jan 23, 2026", completed: false },
        { step: "Shipped", date: "Jan 24, 2026", completed: false },
        { step: "In Transit", date: "Jan 25, 2026", completed: false },
        { step: "Out for Delivery", date: "Jan 26, 2026", completed: false },
        { step: "Delivered", date: "Jan 27, 2026", completed: false },
      ],
    },
  };

  // Load orders from localStorage and merge with sample orders
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
    setAllOrders({ ...sampleOrders, ...storedOrders });

    // Auto-load order from URL parameter if exists
    const orderParam = searchParams.get("order");
    if (orderParam) {
      const formattedCode = orderParam.toUpperCase().startsWith("#")
        ? orderParam.toUpperCase()
        : `#${orderParam.toUpperCase()}`;
      setOrderCode(formattedCode);
      setSearched(true);
      setOrderFound(!!(sampleOrders[formattedCode] || storedOrders[formattedCode]));
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formattedCode = orderCode.startsWith("#") ? orderCode : `#${orderCode}`;
    setOrderCode(formattedCode);
    setSearched(true);
    setOrderFound(!!allOrders[formattedCode]);
  };

  const currentOrder = allOrders[orderCode];

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
          <span className="text-[#2DA5F3] text-[14px]">Track Order</span>
        </div>
      </div>

      <Container>
        <div className="my-12">
          {/* Search Section */}
          <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-8 mb-8">
            <h2 className="font-pub text-[24px] font-semibold text-mtext mb-6">
              Track Your Order
            </h2>
            <p className="font-int text-[14px] text-[#77878F] mb-6">
              Enter your order code to track your shipment status
            </p>

            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                value={orderCode}
                onChange={(e) => setOrderCode(e.target.value.toUpperCase())}
                placeholder="Enter order code (e.g., ORD123456 or #ORD123456)"
                className="flex-1 border border-[#E4E7E9] px-4 py-3 rounded-[3px] font-int text-[14px] outline-0 focus:border-[#2DA5F3] transition-all"
              />
              <button
                type="submit"
                className="bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-8 py-3 rounded-[3px] transition-all duration-300">
                Track Order
              </button>
            </form>
          </div>

          {/* Results Section */}
          {searched && (
            <>
              {!orderFound ? (
                <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-8 text-center">
                  <p className="font-pub text-[18px] font-semibold text-mtext mb-2">
                    Order Not Found
                  </p>
                  <p className="font-int text-[14px] text-[#77878F]">
                    We couldn't find an order with code "{orderCode}". Please check the code and try again.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Order Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Order Info Card */}
                    <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6">
                      <h3 className="font-pub text-[20px] font-semibold text-mtext mb-6">
                        Order Details
                      </h3>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="font-int text-[12px] text-[#77878F] mb-2">
                            Order Number
                          </p>
                          <p className="font-pub font-semibold text-mtext">
                            {currentOrder.orderNumber}
                          </p>
                        </div>
                        <div>
                          <p className="font-int text-[12px] text-[#77878F] mb-2">
                            Order Date
                          </p>
                          <p className="font-pub font-semibold text-mtext">
                            {currentOrder.date}
                          </p>
                        </div>
                        <div>
                          <p className="font-int text-[12px] text-[#77878F] mb-2">
                            Tracking ID
                          </p>
                          <p className="font-pub font-semibold text-mtext">
                            {currentOrder.trackingId}
                          </p>
                        </div>
                        <div>
                          <p className="font-int text-[12px] text-[#77878F] mb-2">
                            Total Amount
                          </p>
                          <p className="font-pub font-semibold text-[#FA8232]">
                            {currentOrder.total}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="bg-[#F2F4F5] p-4 rounded-[3px] flex items-center gap-3">
                        <MdLocalShipping className="text-[24px] text-[#FA8232]" />
                        <div>
                          <p className="font-int text-[12px] text-[#77878F]">
                            Current Status
                          </p>
                          <p className="font-pub font-semibold text-mtext text-[16px]">
                            {currentOrder.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6">
                      <h3 className="font-pub text-[20px] font-semibold text-mtext mb-6">
                        Items in Order
                      </h3>

                      <div className="space-y-4">
                        {currentOrder.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-4 pb-4 border-b border-[#E4E7E9] last:border-0">
                            {/* Product Image */}
                            {item.image && (
                              <div className="flex-shrink-0 w-16 h-16 bg-[#F2F4F5] rounded-[3px] overflow-hidden border border-[#E4E7E9] flex items-center justify-center">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            {/* Product Details */}
                            <div className="flex-1 flex justify-between items-start">
                              <div>
                                <p className="font-pub font-medium text-[14px] text-mtext mb-2">
                                  {item.name}
                                </p>
                                <p className="font-int text-[12px] text-[#77878F]">
                                  Quantity: {item.quantity}
                                </p>
                              </div>
                              <span className="font-pub font-semibold text-mtext">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tracking Timeline */}
                    <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6">
                      <h3 className="font-pub text-[20px] font-semibold text-mtext mb-8">
                        Delivery Timeline
                      </h3>

                      <div className="space-y-6">
                        {currentOrder.timeline.map((event, index) => (
                          <div key={index} className="flex gap-4">
                            {/* Timeline Icon */}
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  event.completed
                                    ? "bg-[#FA8232]"
                                    : event.current
                                    ? "bg-[#2DA5F3] border-4 border-[#E8F4FF]"
                                    : "bg-[#E4E7E9]"
                                }`}>
                                {event.completed ? (
                                  <MdDone className="text-white text-[20px]" />
                                ) : event.current ? (
                                  <MdLocalShipping className="text-white text-[20px]" />
                                ) : (
                                  <div className="w-2 h-2 bg-[#77878F] rounded-full"></div>
                                )}
                              </div>
                              {index < currentOrder.timeline.length - 1 && (
                                <div
                                  className={`w-1 h-12 ${
                                    event.completed ? "bg-[#FA8232]" : "bg-[#E4E7E9]"
                                  }`}></div>
                              )}
                            </div>

                            {/* Timeline Content */}
                            <div className="pb-4">
                              <p
                                className={`font-pub font-semibold ${
                                  event.completed || event.current
                                    ? "text-mtext"
                                    : "text-[#929FA5]"
                                }`}>
                                {event.step}
                              </p>
                              <p className="font-int text-[12px] text-[#77878F]">
                                {event.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="h-fit bg-white border border-[#E4E7E9] rounded-[5px] p-6">
                    <h3 className="font-pub text-[18px] font-semibold text-mtext mb-6">
                      Order Summary
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="font-int text-[14px] text-[#77878F]">
                          Order Number
                        </span>
                        <span className="font-pub font-medium text-mtext">
                          {currentOrder.orderNumber}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-int text-[14px] text-[#77878F]">
                          Status
                        </span>
                        <span
                          className={`font-pub font-medium ${
                            currentOrder.status === "Delivered"
                              ? "text-green-600"
                              : "text-[#FA8232]"
                          }`}>
                          {currentOrder.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-int text-[14px] text-[#77878F]">
                          Tracking ID
                        </span>
                        <span className="font-pub font-medium text-mtext text-[12px]">
                          {currentOrder.trackingId}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-[#E4E7E9] pt-4">
                        <span className="font-pub font-semibold text-mtext">
                          Total Amount
                        </span>
                        <span className="font-pub font-bold text-[#FA8232] text-[16px]">
                          {currentOrder.total}
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/shop"
                      className="w-full block text-center bg-[#2DA5F3] hover:bg-[#1681c8] text-white font-pub font-bold py-3 rounded-[3px] transition-all duration-300">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Sample Orders Info */}
          {!searched && (
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-8">
              <h3 className="font-pub text-[18px] font-semibold text-mtext mb-6">
                How to Track Your Order
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-[14px]">
                  <p className="font-int text-[#77878F]">
                    <span className="font-semibold text-mtext">✓</span> Enter your order code in the search field
                  </p>
                  <p className="font-int text-[#77878F]">
                    <span className="font-semibold text-mtext">✓</span> Code format: ORD123456 or #ORD123456
                  </p>
                  <p className="font-int text-[#77878F]">
                    <span className="font-semibold text-mtext">✓</span> View real-time shipping updates
                  </p>
                  <p className="font-int text-[#77878F]">
                    <span className="font-semibold text-mtext">✓</span> Track delivery timeline and status
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-pub font-semibold text-mtext mb-3">Quick Access Orders:</p>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {Object.values(allOrders).map((order) => (
                      <button
                        key={order.orderNumber}
                        onClick={() => {
                          setOrderCode(order.orderNumber);
                          setSearched(true);
                          setOrderFound(true);
                        }}
                        className="w-full text-left px-4 py-2 bg-[#F2F4F5] hover:bg-[#E4E7E9] rounded-[3px] border border-[#E4E7E9] transition-all font-pub text-[14px] text-mtext">
                        {order.orderNumber}{" "}
                        <span className="text-[#77878F] text-[12px]">({order.status})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TrackOrder;
