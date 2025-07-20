"use client";
import { useState, useEffect } from "react";

const Carousel = ({ images, isSingleOnMobile = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (isSingleOnMobile && width < 768) {
        setSlidesPerView(1);
      } else if (width < 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }

      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSingleOnMobile]);

  const maxOffset = Math.max(images.length - slidesPerView, 0);

  const isAtEnd = currentIndex >= maxOffset;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxOffset));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const translateX = -(currentIndex * (100 / images.length) * slidesPerView);
  const trackWidth = `${(100 / slidesPerView) * images.length}%`;

  if (isMobile) {
    return (
      <div className="overflow-x-auto flex gap-4 py-2 px-2 pr-1 scrollbar-hide snap-x scroll-smooth">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-none snap-start ${
              isSingleOnMobile ? "w-full" : "w-1/3"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full my-5 overflow-hidden">
      <div className="relative">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            width: `${(100 / slidesPerView) * images.length}%`,
            transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ width: `${100 / images.length}%` }}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 ${
            currentIndex <= 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex <= 0}
        >
          &#8249;
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 ${
            currentIndex >= maxOffset ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex >= maxOffset}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
