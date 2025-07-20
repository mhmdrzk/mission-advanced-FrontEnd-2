"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, Star, User } from "lucide-react";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-[#181a1c] text-white px-6 py-4 flex justify-between items-center relative z-50">
      <div className="flex items-center">
        <div className="navbar-logo sm:hidden">
          <a href="/beranda">
            <img src="img/Vector.png" alt="Logo" className="w-8" />
          </a>
        </div>

        <div className="navbar-logo hidden sm:block">
          <a href="/beranda">
            <img src="img/Logo.png" alt="Logo" className="w-32" />
          </a>
        </div>

        <nav className="ms-5 space-x-6 text-sm flex">
          <a href="/series" className="hover:text-gray-300 transition">
            Series
          </a>
          <a href="/film" className="hover:text-gray-300 transition">
            Film
          </a>
          <a href="/daftarSaya" className="hover:text-gray-300 transition">
            Daftar Saya
          </a>
        </nav>
      </div>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="/img/profile.png"
            alt="User"
            className="w-8 h-8 rounded-full object-cover border border-white"
          />
          <ChevronDown size={18} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg py-2">
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 transition"
            >
              <User size={16} className="mr-2" />
              Profil Saya
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 transition"
            >
              <Star size={16} className="mr-2" />
              Ubah Premium
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition"
            >
              <LogOut size={16} className="mr-2" />
              Keluar
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
