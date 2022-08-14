import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addPrice } from "./store";
import { minusCount } from "./store";
import { minusPrice } from "./store";
import { sumPrice } from "./store";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        <img src={process.env.PUBLIC_URL + "/images/shopping_basket.jpg"}></img>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Shopping Cart</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.map((value, i) => {
            return (
              <tr key={i}>
                <td className="title">{state.cart[i].title}</td>
                <td className="price">
                  <button
                    onClick={() => {
                      dispatch(minusCount(state.cart[i].id));
                      dispatch(minusPrice(state.cart[i].id));
                      dispatch(sumPrice(state.cart[i].id));
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>

                  {state.cart[i].count}

                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                      dispatch(addPrice(state.cart[i].id));
                      dispatch(sumPrice(state.cart[i].id));
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>

                  <div className="product-price">{state.cart[i].add}</div>
                </td>
              </tr>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Shoppingbasket() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Shoppingbasket;
