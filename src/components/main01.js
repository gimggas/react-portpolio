import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MainPage01() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Card id="review-container">
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/review_01.jpg"}
            />
            <Card.Title>Amanda Johnson</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="review-container">
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/review_02.jpg"}
            />
            <Card.Title>Marvel Blu</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="review-container">
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/review_03.jpg"}
            />
            <Card.Title>Jiniya Snow</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="review-container">
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/review_04.jpg"}
            />
            <Card.Title>Perry White</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="review-container">
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/review_05.jpg"}
            />
            <Card.Title>Ketty Rawn</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="review-container">
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/review_06.jpg"}
            />
            <Card.Title>Amanda Johnson</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
export default MainPage01;
