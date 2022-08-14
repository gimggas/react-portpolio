import React, { useState } from "react";

function Capacity() {
  let data = [200, 400, 1000];

  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <div className="container">
      {data.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}g
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Capacity;
