import React from "react";
import FlushExample from "../components/List";
import BasicButtonExample from "../components/dropdown";
import BreadcrumbExample01 from "../components/breadcrumbs01";
import "./Sub.css";
import Footer from "../components/Footer";
import { addItem } from "../components/store";
import { useDispatch } from "react-redux";

const products = [
  {
    id: "new-09",
    title: "[콩볶는사람들] 스프링 블렌드",
    subtitle: "#밀키 & 은은한",
    price: "12000",
  },
  {
    id: "new-08",
    title: "[콩볶는사람들] 스프링 블렌드",
    subtitle: "#밀키 & 은은한",
    price: "12000",
  },
  {
    id: "new-07",
    title: "[커피몽타주] 비터스윗 라이트 에디션 2",
    subtitle: "#쌉쌀 & 묵직한",
    price: "12000",
  },
  {
    id: "new-06",
    title: "[커피몽타주] 센스 앤 센서빌리티",
    subtitle: "#상큼 & 깔끔한",
    price: "15000",
  },
  {
    id: "new-05",
    title: "[커피몽타주] 비터스윗 라이트 에디션 1",
    subtitle: "#밸런스 & 부드러운",
    price: "18000",
  },
  {
    id: "new-04",
    title: "[영앤도터스] 룰라바이",
    subtitle: "#달콤 & 상콤",
    price: "18000",
  },
  {
    id: "new-03",
    title: "[영앤도터스] 에티오피아 예가체프",
    subtitle: "#달콤 & 상콤",
    price: "22000",
  },
  {
    id: "new-02",
    title: "[영앤도터스] 파퓨아뉴기니 모리타",
    subtitle: "#달콤 & 깔끔한",
    price: "18000",
  },
  {
    id: "new-01",
    title: "[영앤도터스] 나탈리",
    subtitle: "#달콤 & 고소",
    price: "16000",
  },
];

export default function Sub() {
  let dispatch = useDispatch();

  return (
    <>
      <BreadcrumbExample01 />
      <section className="sub">
        <FlushExample />
        <div className="container">
          <h3 className="title">모든 커피</h3>
          <BasicButtonExample />
          {products.map((value, i, props) => {
            if (i < 12) {
              return (
                <div className="col-md-3">
                  <a href="#">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/01_coffee_img_0${i + 1}.jpg`
                      }
                      width="300px"
                    />

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
        </div>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
