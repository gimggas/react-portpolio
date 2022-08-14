import React, { useState } from "react";

function Smash() {
  let data = [
    "홀빈(분쇄 안함)",
    "커피 메이커",
    "에스프레소 머신",
    "프렌치 프레스",
    "핸드 드립",
    "모카포트",
  ];

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
              {item}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Smash;
