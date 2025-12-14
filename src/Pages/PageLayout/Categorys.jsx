import React from "react";
import Slider from "react-slick";

import CatgImg1 from "../../assets/Categorys/CatgImg1.png";
import CatgImg2 from "../../assets/Categorys/CatgImg2.png";
import CatgImg3 from "../../assets/Categorys/CatgImg3.png";
import CatgImg4 from "../../assets/Categorys/CatgImg4.png";
import CatgImg5 from "../../assets/Categorys/CatgImg5.png";
import CatgImg6 from "../../assets/Categorys/CatgImg6.png";
import Container from "../../Layouts/Container";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const Categorys = () => {
   let Catg = [
      {
         img: CatgImg1,
         title: "Computer & Laptop",
      },
      {
         img: CatgImg2,
         title: "SmartPhone",
      },
      {
         img: CatgImg3,
         title: "Headphones",
      },
      {
         img: CatgImg4,
         title: "Accessories",
      },
      {
         img: CatgImg5,
         title: "Camera & Photo",
      },
      {
         img: CatgImg6,
         title: "TV & Homes",
      },
      {
         img: CatgImg1,
         title: "Computer & Laptop",
      },
      {
         img: CatgImg2,
         title: "SmartPhone",
      },
      {
         img: CatgImg3,
         title: "Headphones",
      },
      {
         img: CatgImg4,
         title: "Accessories",
      },
      {
         img: CatgImg5,
         title: "Camera & Photo",
      },
      {
         img: CatgImg6,
         title: "TV & Homes",
      },
   ];

   function SampleNextArrow(props) {
      const { onClick } = props;
      return (
         <IoArrowForward
            className="w-12 h-12 rounded-full bg-[#FA8232] hover:bg-[#fc6602] transition-all duration-200 text-[#FFFFFF] p-3 text-[24px] cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 translate-x-full z-9999"
            onClick={onClick}
         />
      );
   }

   function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
         <IoArrowBackOutline
            className="w-12 h-12 rounded-full bg-[#FA8232] hover:bg-[#fc6602] transition-all duration-200 text-[#FFFFFF] p-3 text-[24px] cursor-pointer absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full z-9999"
            onClick={onClick}
         />
      );
   }

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };

   return (
      <section>
         <Container>
            <h2 className="font-pub font-semibold text-[32px] leading-10 text[#191C1F] text-center">
               Shop with Categorys
            </h2>

            <div className="w-[1250px] mx-auto text-center mt-10 ">
               <Slider {...settings}>
                  {Catg.map((item, idx) => (
                     <div
                        key={idx}
                        className="h-[236px] max-w-[190px] outline-0 bg-[#FFFFFF] border border-[#E4E7E9] rounded-sm py-6 px-7 text-center hover:bg-[#E4E7E9] transition-all duration-300 cursor-pointer">
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-[148px]  "
                        />
                        <h4 className="mt-4 font-pub font-medium text-[16px] text-[#191C1F] leading-6">
                           {item.title}
                        </h4>
                     </div>
                  ))}
               </Slider>
            </div>
         </Container>
      </section>
   );
};

export default Categorys;
