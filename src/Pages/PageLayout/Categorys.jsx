import React from "react";
import Slider from "react-slick";

import CatgImg1 from "../../assets/Categorys/img1.png";
import CatgImg2 from "../../assets/Categorys/img2.png";
import CatgImg3 from "../../assets/Categorys/img3.png";
import CatgImg4 from "../../assets/Categorys/img4.png";
import CatgImg5 from "../../assets/Categorys/img5.png";
import CatgImg6 from "../../assets/Categorys/img6.png";
import Container from "../../Layouts/Container";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { Link } from "react-router";

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
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <section>
         <Container>
            <h2 className="font-pub font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-10 text[#191C1F] text-center">
               Shop with Categorys
            </h2>

            <div className="w-full mx-auto px-[20px] text-center mt-6 sm:mt-10">
               <Slider {...settings}>
                  {Catg.map((item, idx) => (
                     <Link to="/shop" className="h-[200px] sm:h-[236px] max-w-[150px] sm:max-w-[190px] outline-0 bg-[#FFFFFF] border border-[#E4E7E9] rounded-sm py-4 sm:py-6 px-4 sm:px-7 text-center hover:bg-[#E4E7E9] transition-all duration-300 cursor-pointer" key={idx}>
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-[100px] sm:w-[148px] mx-auto"
                        />
                        <h4 className="mt-3 sm:mt-4 font-pub font-medium text-[12px] sm:text-[16px] text-[#191C1F] leading-6">
                           {item.title}
                        </h4>
                     </Link>
                  ))}
               </Slider>
            </div>
         </Container>
      </section>
   );
};

export default Categorys;
