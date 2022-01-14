// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export default function Swipe() {
  return (
    <>
      <div className="text-center ">
        <h2>Products</h2>
      </div>
      <div className="py-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEkqiVsXlHnSu6d-CaEZxdd1v-szfPjiMUA&usqp=CAU" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
