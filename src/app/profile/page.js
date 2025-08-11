"use client";

import Image from "next/image";
import Header from "@/components/Header";
import myList from "@/components/data/myList";
import Footer from "@/components/Footer";
import { useState } from "react";

const Profile = () => {
  const [list, setList] = useState(myList);

  const handleDeleteItem = (index) => {
    setList((prevList) => prevList.filter((item, i) => i !== index));
  };

  return (
    <div className="min-h-screen text-white p-6 space-y-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#181a1c] p-6 rounded-md col-span-2">
          <h2 className="text-xl font-semibold mb-4">Profil Saya</h2>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/img/profile.png"
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full"
            />
            <button className="border border-blue-700 text-white px-4 py-2 rounded-4xl hover:bg-blue-700">
              Ubah Foto
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm">Nama Pengguna</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue=""
                  placeholder="masukan nama pengguna"
                  className="w-full bg-[#E7E3FC3B] border border-gray-600 px-4 py-2 rounded pr-10"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ✎
                </span>
              </div>
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                defaultValue=""
                placeholder="masukan email"
                className="w-full bg-[#E7E3FC3B] border border-gray-600 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm">Kata Sandi</label>
              <input
                type="password"
                defaultValue=""
                placeholder="masukan kata sandi"
                className="w-full bg-[#E7E3FC3B] border border-gray-600 px-4 py-2 rounded"
              />
            </div>

            <button className="mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Simpan
            </button>
          </div>
        </div>

        <div className="bg-[#3D4142] h-50 p-6 rounded-md justify-between">
          <div className="flex">
            <img src="/img/warning.png" alt="..." className="h-25 w-25" />
            <div>
              <p className="text-sm mb-4">Saat ini anda belum berlangganan</p>
              <p className="text-sm text-gray-400">
                Dapatkan akses tak terbatas ke ribuan film dan serial kesukaan
                kamu!
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <button className="bg-[#181A1C] rounded-3xl hover:bg-[#080808] py-2 px-8 text-sm">
              Mulai Berlangganan
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Daftar Saya</h2>
          <a
            href="/daftarSaya"
            className="text-sm text-blue-400 hover:underline"
          >
            Lihat Semua
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {list.slice(0, 7).map((item, index) => (
            <div key={index} className="relative group rounded overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={450}
                className="w-full h-auto object-cover transform transition duration-300 ease-in-out hover:scale-90 rounded-lg"
              />
              <button
                onClick={() => handleDeleteItem(index)}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
