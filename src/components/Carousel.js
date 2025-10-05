"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/store/movieSlice";
import { addToMyList } from "@/store/myListSlice";

const Carousel = ({
  category = "continueWacth",
  isSingleOnMobile = false,
  showAddButton = true,
}) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.movies);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const images = items?.[category] || [];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setSlidesPerView(width < 768 ? (isSingleOnMobile ? 1 : 3) : 4);
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSingleOnMobile]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!images.length) return <p className="text-gray-400">No data</p>;

  const maxOffset = Math.max(images.length - slidesPerView, 0);
  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxOffset));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const handleAdd = (item, index) => {
    const payload = {
      ...item,
      category,
      id: item.id ?? item.src ?? `${category}-${index}`,
    };
    dispatch(addToMyList(payload));
  };

  // Mobile
  if (isMobile) {
    return (
      <div className="overflow-x-auto flex gap-4 py-2 px-2 pr-1 scrollbar-hide snap-x scroll-smooth">
        {images.map((item, index) => (
          <div
            key={index}
            className={`relative flex-none snap-start ${
              isSingleOnMobile ? "w-full" : "w-1/3"
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto object-cover rounded-lg"
            />
            {showAddButton && (
              <button
                onClick={() => handleAdd(item, index)}
                className="absolute bottom-2 right-2 bg-white/80 text-black text-xs px-2 py-1 rounded
                           cursor-pointer transition-transform hover:scale-105 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-white/80"
                aria-label="Tambah ke daftar"
              >
                + Tambah
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Desktop
  return (
    <div className="relative w-full my-5 overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          width: `${(100 / slidesPerView) * images.length}%`,
          transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            style={{ width: `${100 / images.length}%` }}
            className="relative"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto object-cover rounded-lg"
            />
            {showAddButton && (
              <button
                onClick={() => handleAdd(item, index)}
                className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded
                           cursor-pointer transition-transform hover:scale-105 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Tambah ke daftar"
              >
                + Tambah
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Navigasi */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full
                   cursor-pointer transition-transform hover:scale-110 active:scale-95"
        aria-label="Sebelumnya"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full
                   cursor-pointer transition-transform hover:scale-110 active:scale-95"
        aria-label="Berikutnya"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
