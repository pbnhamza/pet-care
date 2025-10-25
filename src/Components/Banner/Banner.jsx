import React from "react";
import { SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import MyContainer from "../MyContainer/MyContainer";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";

const Banner = () => {
  return (
    <MyContainer>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          Pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          speed={5000}
          className="h-[480px] z-1"
        >
          <SwiperSlide>
            <img className="w-full h-full object-center" src={slide1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full h-full" src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={slide3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </MyContainer>
  );
};

export default Banner;
