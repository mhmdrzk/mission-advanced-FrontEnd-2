"use client";
import { useState } from "react";
import Image from "next/image";
import GenreDropdown from "@/components/GendreDropdown";

const Banner = ({
  imageSrc = "/img/banner.png",
  imageAlt = "Banner",
  title = "Duty After School",
  description = "Sebuah benda tak terlihat mengintai di dunia. Cuaca ketegangan...",
  genres = [],
  showGenreDropdown = true,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="relative w-full h-90 sm:h-140 bg-gray-800 ">
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      <div className="relative z-20 text-white px-10 py-10 sm:py-45">
        {showGenreDropdown && <GenreDropdown genres={genres} />}
        <h1 className="text-4xl font-bold">{title}</h1>

        <button onClick={toggleDescription} className="text-lg text-white mt-2">
          {showDescription ? "Sembunyikan Deskripsi" : "Tampilkan Deskripsi"}
        </button>

        {showDescription && <p className="text-lg mt-2">{description}</p>}

        <div className="mt-6">
          <button className="bg-[#024DB7] hover:bg-[#0367DB] transition text-white px-6 py-2 rounded-4xl mr-4">
            Main
          </button>
          <button className="bg-[#424242] hover:bg-[#181A1C] transition text-white px-6 py-2 rounded-4xl ">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
