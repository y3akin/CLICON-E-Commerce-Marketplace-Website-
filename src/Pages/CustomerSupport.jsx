import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdPhone, MdEmail } from "react-icons/md";
import { FiMapPin, FiClock, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Layouts/Container";

const CustomerSupport = () => {
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
          <span className="text-[#2DA5F3] text-[14px]">Customer Support</span>
        </div>
      </div>

      <Container>
        <div className="my-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-pub text-[40px] font-semibold text-mtext mb-4">
              Customer Support Center
            </h1>
            <p className="font-int text-[16px] text-[#77878F] max-w-[600px] mx-auto">
              We're here to help! Find answers to your questions and get in touch with our support team.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#FFE5D5] rounded-full flex items-center justify-center mx-auto mb-4">
                <MdPhone size={32} className="text-[#FA8232]" />
              </div>
              <h3 className="font-pub text-[18px] font-semibold text-mtext mb-2">
                Call Us
              </h3>
              <p className="font-int text-[14px] text-[#77878F] mb-3">
                Available Monday to Friday, 9AM - 6PM
              </p>
              <p className="font-pub font-bold text-[#FA8232]">
                +1 (888) 123-4567
              </p>
            </div>

            {/* Email */}
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#D4EDDA] rounded-full flex items-center justify-center mx-auto mb-4">
                <MdEmail size={32} className="text-[#00B386]" />
              </div>
              <h3 className="font-pub text-[18px] font-semibold text-mtext mb-2">
                Email Us
              </h3>
              <p className="font-int text-[14px] text-[#77878F] mb-3">
                We'll respond within 24 hours
              </p>
              <p className="font-pub font-bold text-[#2DA5F3]">
                support@clicon.com
              </p>
            </div>

            {/* Chat */}
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMessageSquare size={32} className="text-[#2DA5F3]" />
              </div>
              <h3 className="font-pub text-[18px] font-semibold text-mtext mb-2">
                Live Chat
              </h3>
              <p className="font-int text-[14px] text-[#77878F] mb-3">
                Chat with us in real-time
              </p>
              <p className="font-pub font-bold text-[#FA8232]">
                Open 24/7
              </p>
            </div>

            {/* Address */}
            <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#FFE5D5] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin size={32} className="text-[#FA8232]" />
              </div>
              <h3 className="font-pub text-[18px] font-semibold text-mtext mb-2">
                Visit Us
              </h3>
              <p className="font-int text-[14px] text-[#77878F]">
                123 Tech Street, Silicon Valley, CA 94025
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <h2 className="font-pub text-[28px] font-semibold text-mtext mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <details className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 cursor-pointer hover:shadow-md transition-all group">
                  <summary className="font-pub font-semibold text-[16px] text-mtext flex items-center justify-between">
                    How do I track my order?
                    <span className="group-open:rotate-180 transition-transform">
                      <MdKeyboardArrowRight size={24} />
                    </span>
                  </summary>
                  <p className="font-int text-[14px] text-[#77878F] mt-4 leading-relaxed">
                    You can track your order by visiting the "Track Order" page and entering your order code. You'll be able to see real-time updates on your shipment status and delivery timeline.
                  </p>
                </details>

                {/* FAQ Item 2 */}
                <details className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 cursor-pointer hover:shadow-md transition-all group">
                  <summary className="font-pub font-semibold text-[16px] text-mtext flex items-center justify-between">
                    What is your return policy?
                    <span className="group-open:rotate-180 transition-transform">
                      <MdKeyboardArrowRight size={24} />
                    </span>
                  </summary>
                  <p className="font-int text-[14px] text-[#77878F] mt-4 leading-relaxed">
                    We offer a 30-day hassle-free return policy on all products. Items must be in original condition with all packaging and documentation. Simply initiate a return through your account dashboard.
                  </p>
                </details>

                {/* FAQ Item 3 */}
                <details className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 cursor-pointer hover:shadow-md transition-all group">
                  <summary className="font-pub font-semibold text-[16px] text-mtext flex items-center justify-between">
                    How long does shipping take?
                    <span className="group-open:rotate-180 transition-transform">
                      <MdKeyboardArrowRight size={24} />
                    </span>
                  </summary>
                  <p className="font-int text-[14px] text-[#77878F] mt-4 leading-relaxed">
                    Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days. International orders may take 10-15 business days depending on destination.
                  </p>
                </details>

                {/* FAQ Item 4 */}
                <details className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 cursor-pointer hover:shadow-md transition-all group">
                  <summary className="font-pub font-semibold text-[16px] text-mtext flex items-center justify-between">
                    Do you offer warranty on products?
                    <span className="group-open:rotate-180 transition-transform">
                      <MdKeyboardArrowRight size={24} />
                    </span>
                  </summary>
                  <p className="font-int text-[14px] text-[#77878F] mt-4 leading-relaxed">
                    Most of our products come with a 1-year manufacturer warranty. Some premium items may include extended warranty options. Check the product details page for specific warranty information.
                  </p>
                </details>

                {/* FAQ Item 5 */}
                <details className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 cursor-pointer hover:shadow-md transition-all group">
                  <summary className="font-pub font-semibold text-[16px] text-mtext flex items-center justify-between">
                    How do I reset my password?
                    <span className="group-open:rotate-180 transition-transform">
                      <MdKeyboardArrowRight size={24} />
                    </span>
                  </summary>
                  <p className="font-int text-[14px] text-[#77878F] mt-4 leading-relaxed">
                    Click "Forgot Password" on the login page and enter your email. You'll receive a password reset link within minutes. Follow the instructions to create a new password.
                  </p>
                </details>

                {/* FAQ Item 6 */}
                <details className="bg-white border border-[#E4E7E9] rounded-[5px] p-6 cursor-pointer hover:shadow-md transition-all group">
                  <summary className="font-pub font-semibold text-[16px] text-mtext flex items-center justify-between">
                    What payment methods do you accept?
                    <span className="group-open:rotate-180 transition-transform">
                      <MdKeyboardArrowRight size={24} />
                    </span>
                  </summary>
                  <p className="font-int text-[14px] text-[#77878F] mt-4 leading-relaxed">
                    We accept all major credit cards, PayPal, Venmo, Amazon Pay, and Cash on Delivery. All transactions are secure and encrypted.
                  </p>
                </details>
              </div>
            </div>

            {/* Support Hours */}
            <div className="lg:col-span-1">
              {/* Business Hours */}
              <div className="bg-[#F2F4F5] border border-[#E4E7E9] rounded-[5px] p-6 mb-6">
                <h3 className="font-pub text-[18px] font-semibold text-mtext mb-4 flex items-center gap-2">
                  <FiClock size={20} className="text-[#FA8232]" />
                  Business Hours
                </h3>
                <div className="space-y-3 font-int text-[14px]">
                  <div className="flex justify-between">
                    <span className="text-[#77878F]">Monday - Friday:</span>
                    <span className="font-semibold text-mtext">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#77878F]">Saturday:</span>
                    <span className="font-semibold text-mtext">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#77878F]">Sunday:</span>
                    <span className="font-semibold text-mtext">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#77878F]">Live Chat:</span>
                    <span className="font-semibold text-mtext">24/7</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-[#E4E7E9] rounded-[5px] p-6">
                <h3 className="font-pub text-[18px] font-semibold text-mtext mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/shop"
                    className="block font-int text-[14px] text-[#2DA5F3] hover:text-[#1681c8] font-medium">
                    → Browse Products
                  </Link>
                  <Link
                    to="/trackorder"
                    className="block font-int text-[14px] text-[#2DA5F3] hover:text-[#1681c8] font-medium">
                    → Track Order
                  </Link>
                  <Link
                    to="/cart"
                    className="block font-int text-[14px] text-[#2DA5F3] hover:text-[#1681c8] font-medium">
                    → View Cart
                  </Link>
                  <Link
                    to="/compare"
                    className="block font-int text-[14px] text-[#2DA5F3] hover:text-[#1681c8] font-medium">
                    → Compare Products
                  </Link>
                  <Link
                    to="/info"
                    className="block font-int text-[14px] text-[#2DA5F3] hover:text-[#1681c8] font-medium">
                    → About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form CTA */}
          <div className="bg-gradient-to-r from-[#2DA5F3] to-[#1681c8] rounded-[5px] p-12 text-center text-white">
            <h2 className="font-pub text-[28px] font-semibold mb-4">
              Didn't Find Your Answer?
            </h2>
            <p className="font-int text-[16px] mb-6 text-white/90">
              Send us a message and our support team will get back to you within 24 hours.
            </p>
            <button className="bg-[#FA8232] hover:bg-[#d76e28] text-white font-pub font-bold px-8 py-3 rounded-[3px] transition-all">
              Send Message
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerSupport;
