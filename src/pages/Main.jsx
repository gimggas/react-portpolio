import React from "react";
import "./Main.css";
import MainPage from "../components/main";
import MainPage01 from "../components/main01";
import AutoLayoutSizingExample from "../components/hot";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addItem } from "../components/store";

export default function Main() {
  let dispatch = useDispatch();

  const bests = [
    {
      id: "best04",
      title: "[콩볶는사람들] 스프링 블렌드",
      subtitle: "#밀키 & 은은한",
      price: "12000",
    },
    {
      id: "best03",
      title: "[영앤도터스] 콜린",
      subtitle: "#밀키 & 은은한",
      price: "12000",
    },
    {
      id: "best02",
      title: "[커피몽타주] 비터스윗 라이트",
      subtitle: "#밀키 & 은은한",
      price: "12000",
    },
    {
      id: "best01_set",
      title: "[커피몽타주] 센스 앤 센서빌리티",
      subtitle: "#밀키 & 은은한",
      price: "12000",
    },
  ];
  const news = [
    {
      id: "new04",
      title: "[영앤도터스] 룰라바이",
      subtitle: "#밀키 & 은은한",
      price: "18000",
    },
    {
      id: "new03",
      title: "[영앤도터스] 파퓨아뉴기니 모리타",
      subtitle: "#밀키 & 은은한",
      price: "18000",
    },
    {
      id: "new02",
      title: "[하늘에커피] 돌담 in 애월",
      subtitle: "#밀키 & 은은한",
      price: "11000",
    },
    {
      id: "new01",
      title: "[하늘에커피] 하늘에 시그니처 블랜딩",
      subtitle: "#밀키 & 은은한",
      price: "11500",
    },
  ];
  const rosterys = [
    {
      id: "rostery-01",
      title: "콩볶는사람들",
    },
    {
      id: "rostery-02",
      title: "커피몽타주",
    },
    {
      id: "rostery-03",
      title: "영앤도터스",
    },
    {
      id: "rostery-04",
      title: "하늘에커피",
    },
    {
      id: "rostery-05",
      title: "베르크",
    },
    {
      id: "rostery-06",
      title: "수수커피",
    },
  ];

  return (
    <>
      <div className="visual-main">
        <div className="visual-main-box">
          <div className="front">
            <img
              src={process.env.PUBLIC_URL + "/images/visual_main_items.png"}
            ></img>
          </div>
          <div className="back">
            <img
              src={process.env.PUBLIC_URL + "/images/visual_main_bg.jpg"}
            ></img>
          </div>
        </div>
        <div className="title">
          <h2>
            이번 커피도, 다음 커피도 <br></br>내가 좋아하는 맛으로 즐겨요
          </h2>
          <p>다양한 커피 중에서 내 취향 커피만 구독해요.실패할 걱정 없어요.</p>
          <a href="#">
            <button className="coffee_recomm">내 취향 커피 추천 받기</button>
          </a>
        </div>
      </div>

      <div className="container">
        <section class="best">
          <h3 className="title">Best Products</h3>
          {bests.map((value, i) => {
            if (i < 4) {
              return (
                <div className="col-md-3">
                  <a href="#">
                    <div className="best__img">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/images/best_0${i + 1}.jpg`
                        }
                        width="280px"
                      />
                    </div>

                    <h3>{value.title}</h3>
                    <span>{value.subtitle}</span>
                    <p>{value.price}</p>
                  </a>
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: value.id,
                          title: value.title,
                          count: 1,
                          price: value.price,
                          add: value.price,
                          sum: value.price,
                        })
                      );
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              );
            }
          })}
        </section>

        <section class="new">
          <h3 className="title">New Products</h3>
          {news.map((value, i, props) => {
            if (i < 4) {
              return (
                <div className="col-md-3">
                  <a href="#">
                    <div className="new__img">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/images/new_0${i + 1}.jpg`
                        }
                        width="280px"
                      />
                    </div>

                    <h3>{value.title}</h3>
                    <span>{value.subtitle}</span>
                    <p>{value.price}</p>
                  </a>
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: value.id,
                          title: value.title,
                          count: 1,
                          price: value.price,
                          add: value.price,
                        })
                      );
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              );
            }
          })}
        </section>
      </div>

      <div className="main-banner">
        <img src={process.env.PUBLIC_URL + "/images/main_banner.jpg"}></img>
        <div className="title">
          <h2>내 입맛에 꼭 맞는 커피로 추천받고 구독하세요</h2>
          <p>
            내 취향에 딱 맞는 원두를 추천해요.<br></br>
            구독을 시작하고 항상 무료 배송으로 받아보세요.
          </p>
          <a href="#">
            <button className="coffee_recomm">내 취향 커피 추천 받기</button>
          </a>
        </div>
      </div>

      <div className="roastery">
        <h3 className="title">Rostery</h3>
        <MainPage />
      </div>

      <div className="review">
        <MainPage01 />
      </div>

      <div className="hot">
        <h3 className="title">HOT Products</h3>
        <AutoLayoutSizingExample />
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
