"use client";
import { useState } from "react";

const GenreDropdown = ({ genres, label = "Genre", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSelect = (genre) => {
    setSelectedGenre(genre);
    setIsOpen(false);
    if (onSelect) onSelect(genre);
  };

  return (
    <div className="relative  text-left z-50 mb-8 hidden sm:inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2  text-white bg-black bg-opacity-50 rounded-md text-sm hover:bg-opacity-70 focus:outline-none"
      >
        {selectedGenre || label}
        <svg
          className="ml-2 -mr-1 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7l5 5 5-5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 grid grid-cols-2 gap-2 bg-black bg-opacity-90 text-white rounded-md shadow-lg p-3">
          {genres.map((genre, index) => (
            <button
              key={index}
              onClick={() => handleSelect(genre)}
              className="text-left text-sm hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded"
            >
              {genre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreDropdown;
