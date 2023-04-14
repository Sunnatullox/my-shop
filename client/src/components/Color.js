import React from "react";

const Color = ({ data, setColor }) => {
  return (
    <>
      <ul className="colors ps-0">
        {data?.map((color) => (
          <li
            key={color._id}
            onClick={() => setColor(color._id)}
            style={{ backgroundColor: color?.title }}
          ></li>
        ))}
      </ul>
    </>
  );
};

export default Color;
