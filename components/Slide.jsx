"use client";
import React, { useState } from "react";
import { Carousel, Radio } from "antd";
import Image from "next/image";

const Slide = () => {
  const [dotPosition, setDotPosition] = useState("bottom");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <div div className="lg:w-[45%]">
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}>
        {/* <Radio.Button value="top">Top</Radio.Button> */}
        {/* <Radio.Button value="bottom">Bottom</Radio.Button> */}
        {/* <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button> */}
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div className="w-full">
          <Image
            src="/image-product-1.jpg"
            alt="image-1"
            width={300}
            height={300}
            className="object-contain w-full  lg:h-[550px]"
          />
        </div>
        <div>
          <Image
            src="/image-product-2.jpg"
            alt="image-2 "
            width={300}
            height={300}
            className="object-contain w-full lg:h-[550px]"
          />
        </div>
        <div>
          <Image
            src="/image-product-3.jpg"
            alt="image-3"
            width={300}
            height={300}
            className="object-contain w-full  lg:h-[550px]"
          />
        </div>
        <div>
          <Image
            src="/image-product-4.jpg"
            alt="image-4"
            width={300}
            height={300}
            className="object-contain w-full  lg:h-[550px]"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Slide;
