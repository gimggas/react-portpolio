import React from "react";
import BreadcrumbExample from "../components/breadcrumbs";
import Productinfo from "../components/Productinfo";
import Footer from "../components/Footer";
import "./Detail.css";

export default function Detail() {
  return (
    <>
      <BreadcrumbExample />
      <section className="detail">
        <div className="img">
          <div className="product__thumnail">
            <img
              src={process.env.PUBLIC_URL + "/images/01_coffee_img_01.jpg"}
            ></img>
          </div>
        </div>
        <Productinfo />;
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
