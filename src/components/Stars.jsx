import React, { useState } from "react";
import Star from "./Star";

export default function Stars({ maxLength = 5 }) {
  const [star, setStar] = useState(1);
  const [tempStar, setTempStar] = useState(0);
  const opinion = ["Very bad", "bad", "not bad", "good", "amazing"];

  function handleChangeStar(i) {
    setStar(i);
  }

  function handleChangeHover(i) {
    setTempStar(i);
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        {Array.from({ length: maxLength }, (_, i) => {
          return (
            <Star
              key={i}
              onStar={() => handleChangeStar(i + 1)}
              onEnter={() => handleChangeHover(i + 1)}
              onLeave={() => handleChangeHover(0)}
              fill={tempStar ? tempStar > i : star >= i + 1}
            />
          );
        })}
      </div>
      <div>{tempStar > 0 ? opinion[tempStar - 1] : opinion[star - 1]}</div>
    </div>
  );
}
