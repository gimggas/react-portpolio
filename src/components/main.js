// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function MainPage() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={8}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_01.jpg"}></img>
          <span>콩볶는사람들</span>
        </a>
      </SwiperSlide>

      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_02.jpg"}></img>
          <span>커피몽타주</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_03.jpg"}></img>
          <span>영앤도터스</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_04.jpg"}></img>
          <span>하늘앤커피</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_05.jpg"}></img>
          <span>베르크</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_06.jpg"}></img>
          <span>수수커피</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_07.jpg"}></img>
          <span>알렉스더커피</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_08.jpg"}></img>
          <span>커넥츠 커피</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_09.jpg"}></img>
          <span>펠트</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_10.jpg"}></img>
          <span>55˚ 커피</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_11.jpg"}></img>
          <span>차군커피</span>
        </a>
      </SwiperSlide>
      <SwiperSlide className="roastery__thumnail">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/images/logo_12.png"}></img>
          <span>웨이브온 커피</span>
        </a>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainPage;
