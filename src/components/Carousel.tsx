'use client';
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ data }: {
    data: {
        image: string
    }[]
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }

    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % data.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100vh] ">
      <div className="w-full h-full overflow-hidden relative">
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="w-full h-full absolute flex transition-all delay-1000 duration-1000"
        >
          {data.map((v, i) => (
            <div key={i} className="relative shrink-0 w-screen h-full">
              <Image
                className="pointer-events-none"
                alt="random image"
                fill
                src={v.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-3">
        {data.map((item: { image: string }, index: number) => (
          <button
            key={index}
            disabled={currentImg === index}
            onClick={() => setCurrentImg(index)}
            className={`border px-4 py-2 font-bold ${
              currentImg === index && "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
