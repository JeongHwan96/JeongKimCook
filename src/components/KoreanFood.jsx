import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigate, useNavigate } from "react-router-dom";

// swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import LogoImg from "../image/Logo2.jpg";
import Button from "./Button";
import Header from "./Header";

const KoreanFood = ({ id }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/Detail/${id}`);
    console.log(id);
  };

  return (
    <>
      <Header headText={"한식"} />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ textAlign: "center", cursor: "pointer" }}>
          <img src={LogoImg} alt="" onClick={goDetail} />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", cursor: "pointer" }}>
          <img src={LogoImg} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", cursor: "pointer" }}>
          <img src={LogoImg} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", cursor: "pointer" }}>
          Slide 4
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default KoreanFood;
