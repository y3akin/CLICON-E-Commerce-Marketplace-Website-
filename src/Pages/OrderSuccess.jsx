import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../Layouts/Container";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

const OrderSuccess = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Get order number from navigation state or generate new one
    if (location.state?.orderNumber) {
      setOrderNumber(location.state.orderNumber);
    } else {
      // Generate unique order number
      const timestamp = Date.now().toString().slice(-6);
      const random = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");
      const newOrderNumber = `#ORD${timestamp}${random}`;
      setOrderNumber(newOrderNumber);

      // Store in orders list for tracking
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "{}");
      existingOrders[newOrderNumber] = {
        orderNumber: newOrderNumber,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        total: location.state?.total || "$0.00",
        status: "Order Confirmed",
        trackingId: `TRACK${timestamp}${random}`,
        items: location.state?.items || [],
        timeline: [
          {
            step: "Order Confirmed",
            date: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            completed: true,
            current: true,
          },
          {
            step: "Processing",
            date: new Date(Date.now() + 86400000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            completed: false,
          },
          {
            step: "Shipped",
            date: new Date(Date.now() + 172800000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            completed: false,
          },
          {
            step: "In Transit",
            date: new Date(Date.now() + 259200000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            completed: false,
          },
          {
            step: "Out for Delivery",
            date: new Date(Date.now() + 432000000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            completed: false,
          },
          {
            step: "Delivered",
            date: new Date(Date.now() + 518400000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            completed: false,
          },
        ],
      };
      localStorage.setItem("orders", JSON.stringify(existingOrders));
    }
  }, [location.state]);

  return (
    <section className="min-h-screen bg-[#F2F4F5] flex items-center justify-center py-12">
      <Container>
        <div className="max-w-[600px] mx-auto bg-white border border-[#E4E7E9] rounded-[5px] p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <IoCheckmarkCircle className="text-[80px] text-[#00B386]" />
          </div>

          {/* Success Message */}
          <h1 className="font-pub text-[32px] font-semibold text-mtext mb-4">
            Order Successfully Placed!
          </h1>

          <p className="font-int text-[16px] text-[#77878F] mb-2">
            Thank you for your purchase. Your order has been confirmed and will
            be processed shortly.
          </p>

          <p className="font-int text-[14px] text-[#929FA5] mb-8">
            You will receive an email confirmation with your order details and
            tracking information.
          </p>

          {/* Order Details Box */}
          <div className="bg-[#F2F4F5] p-6 rounded-[3px] mb-8 border border-[#E4E7E9]">
            <p className="font-pub text-[14px] text-[#5F6C72] mb-2">
              Order Number
            </p>
            <p className="font-pub text-[20px] font-bold text-mtext">
              {orderNumber}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/dashboard"
              className="flex items-center justify-center gap-3 bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold text-[16px] py-3 rounded-[3px] transition-all duration-300">
              <MdDashboard className="text-[20px]" />
              Go to Dashboard
            </Link>

            <Link
              to={`/trackorder?order=${orderNumber.replace("#", "")}`}
              className="flex items-center justify-center gap-3 border-2 border-[#2DA5F3] text-[#2DA5F3] hover:bg-[#2DA5F3] hover:text-white font-pub font-bold text-[16px] py-3 rounded-[3px] transition-all duration-300">
              <AiOutlineFileText className="text-[20px]" />
              View Order
            </Link>
          </div>

          {/* Continue Shopping Link */}
          <Link
            to="/shop"
            className="inline-block mt-6 font-pub font-medium text-[14px] text-[#2DA5F3] hover:text-[#1681c8] underline">
            Continue Shopping
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default OrderSuccess;
