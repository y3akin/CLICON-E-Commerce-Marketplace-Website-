import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../Layouts/Container";

const Info = () => {
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
          <span className="text-[#2DA5F3] text-[14px]">About Us</span>
        </div>
      </div>

      <Container>
        <div className="my-12">
          <div className="text-center mb-8">
            <h1 className="font-pub text-[32px] font-semibold text-mtext mb-3">About CLICON</h1>
            <p className="font-int text-[16px] text-[#77878F] max-w-[800px] mx-auto">
              CLICON is a modern e-commerce marketplace built for simplicity and
              performance. We offer a wide range of electronics, home appliances,
              and accessories with fast shipping and reliable customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white border border-[#E4E7E9] rounded-[5px] p-6">
              <h2 className="font-pub text-[20px] font-semibold text-mtext mb-4">Our Mission</h2>
              <p className="font-int text-[14px] text-[#77878F] leading-relaxed mb-6">
                Our mission is to provide a seamless shopping experience by
                connecting customers with high-quality products and trusted
                sellers. We focus on transparency, fast delivery, and
                exceptional customer service.
              </p>

              <h2 className="font-pub text-[20px] font-semibold text-mtext mb-4">What We Offer</h2>
              <ul className="list-disc pl-5 space-y-2 font-int text-[14px] text-[#77878F] mb-6">
                <li>Wide product selection across multiple categories</li>
                <li>Secure checkout and multiple payment options</li>
                <li>Easy returns and 30-day warranty on eligible items</li>
                <li>Order tracking and responsive customer support</li>
              </ul>

              <h2 className="font-pub text-[20px] font-semibold text-mtext mb-4">Policies</h2>
              <div className="space-y-3 font-int text-[14px] text-[#77878F]">
                <p>
                  <strong>Shipping:</strong> Standard shipping typically takes
                  5-7 business days. Expedited options are available at checkout.
                </p>
                <p>
                  <strong>Returns:</strong> 30-day hassle-free returns for most
                  products. Items must be in original condition.
                </p>
                <p>
                  <strong>Privacy:</strong> We respect your privacy and protect
                  your personal data. See our privacy policy for details.
                </p>
              </div>
            </div>

            <aside className="bg-[#F2F4F5] border border-[#E4E7E9] rounded-[5px] p-6">
              <h3 className="font-pub text-[18px] font-semibold text-mtext mb-4">Contact Info</h3>
              <p className="font-int text-[14px] text-[#77878F] mb-2">Email: <span className="text-mtext font-pub">support@clicon.com</span></p>
              <p className="font-int text-[14px] text-[#77878F] mb-2">Phone: <span className="text-mtext font-pub">+1 (888) 123-4567</span></p>
              <p className="font-int text-[14px] text-[#77878F]">Address: <span className="text-mtext font-pub">123 Tech Street, Silicon Valley, CA</span></p>

              <div className="mt-6">
                <h4 className="font-pub text-[16px] font-semibold text-mtext mb-2">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/shop" className="text-[#2DA5F3]">Browse Products</Link></li>
                  <li><Link to="/trackorder" className="text-[#2DA5F3]">Track Order</Link></li>
                  <li><Link to="/customersupport" className="text-[#2DA5F3]">Customer Support</Link></li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="bg-[#F2F4F5] p-6 rounded-[5px] border border-[#E4E7E9]">
            <h3 className="font-pub text-[18px] font-semibold text-mtext mb-3">Careers & Partnerships</h3>
            <p className="font-int text-[14px] text-[#77878F]">Interested in collaborating with CLICON or joining our team? Send your inquiry to partnerships@clicon.com.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info;
