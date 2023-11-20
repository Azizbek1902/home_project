import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Carousel({ images }) {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((item, ind) => (
          <SwiperSlide key={ind + 1}>
            <img
              src={item}
              className="w-full h-52 bg-cover object-cover"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
