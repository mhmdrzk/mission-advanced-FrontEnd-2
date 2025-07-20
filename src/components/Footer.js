"use client";
import { useState } from "react";

const genres = [
  "Aksi",
  "Drama",
  "Komedi",
  "Sains & Alam",
  "Anak-anak",
  "Fantasi",
  "Petualangan",
  "Thriller",
  "Anime",
  "Kejahatan",
  "Perang",
  "Romantis",
  "Britania",
  "KDrama",
];

const bantuan = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-base text-white text-sm px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="hidden sm:flex justify-between gap-50">
          {/* Logo */}
          <div className="flex flex-col w-1/3">
            <img src="/img/Logo.png" alt="CHILL Logo" className="w-28 mb-4" />
            <div className="text-xs text-neutral-400">
              ©2023 Chill All Rights Reserved.
            </div>
          </div>

          {/* Genre */}
          <div className="w-1/3">
            <div className="font-semibold mb-2 text-xl">Genre</div>
            <ul className="grid grid-cols-3 gap-y-2 gap-x-7 text-neutral-300">
              {genres.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>

          <div className="w-1/3">
            <div className="font-semibold  text-xl">Bantuan</div>
            <ul className="space-y-1 text-neutral-300">
              {bantuan.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sm:hidden">
          <img
            src="/img/Logo.png"
            alt="CHILL Logo"
            className="w-28 me-auto mb-4"
          />
          <div className="text-xs text-neutral-400 mb-6">
            ©2023 Chill All Rights Reserved.
          </div>

          <button
            onClick={() => toggleSection("genre")}
            className="w-full flex justify-between items-center py-2 border-b border-neutral-700"
          >
            <span>Genre</span>
            <span>{openSection === "genre" ? "˄" : ">"}</span>
          </button>
          {openSection === "genre" && (
            <ul className="mt-2 mb-4 pl-2 grid grid-cols-2 gap-y-1 text-neutral-300">
              {genres.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          )}

          <button
            onClick={() => toggleSection("bantuan")}
            className="w-full flex justify-between items-center py-2 border-b border-neutral-700"
          >
            <span>Bantuan</span>
            <span>{openSection === "bantuan" ? "˄" : ">"}</span>
          </button>
          {openSection === "bantuan" && (
            <ul className="mt-2 pl-2 space-y-1 text-neutral-300">
              {bantuan.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
