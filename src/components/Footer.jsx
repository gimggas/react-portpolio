import React from "react";

// function ListComponent(props) {
//   return <li>{props.title}</li>;
// }

// const elements = [
//   {
//     id: 1,
//     title: "Social",
//   },
//   {
//     id: 2,
//     title: "Contact",
//   },
//   {
//     id: 3,
//     title: "About",
//   },
//   {
//     id: 4,
//     title: "Customer Care",
//   },
//   {
//     id: 5,
//     title: "Our Information",
//   },
//   {
//     id: 6,
//     title: "Top Categories",
//   },
// ];

function Footer() {
  return (
    <ul>
      <li>
        <h4>Social</h4>
        <ul>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </ul>
      </li>
      <li>
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">yourexample@email.com</a>
          </li>
          <li>
            <a href="#">example@email.com</a>
          </li>
          <li>
            <a href="#">Call us: +1 254 568-5479</a>
          </li>
        </ul>
      </li>
      <li>
        <h4>About</h4>
        <ul>
          <li>
            <a href="#">Support Center</a>
          </li>
          <li>
            <a href="#">Customer Support</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Copyright</a>
          </li>
        </ul>
      </li>
      <li>
        <h4>Customer Care</h4>
        <ul>
          <li>
            <a href="#">FAQ & Helps</a>
          </li>
          <li>
            <a href="#">Shipping & Delivery</a>
          </li>
          <li>
            <a href="#">Return & Exchanges</a>
          </li>
        </ul>
      </li>
      <li>
        <h4>Our Information</h4>
        <ul>
          <li>
            <a href="#">Privacy policy update</a>
          </li>
          <li>
            <a href="#">Terms & conditions</a>
          </li>
          <li>
            <a href="#">Return Policy</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Footer;
