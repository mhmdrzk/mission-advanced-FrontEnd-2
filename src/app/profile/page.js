"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import myList from "@/components/data/myList";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [list, setList] = useState(myList);

  const handleDeleteItem = (index) => {
    setList((prevList) => prevList.filter((item, i) => i !== index));
  };

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "/img/profile.png",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
          router.push("/");
          return;
        }

        const res = await api.get(`/users/${storedUser.id}`);
        setUser(res.data);

        setFormData({
          username: res.data.username || "",
          email: res.data.email || "",
          password: res.data.password || "",
          avatar: res.data.avatar || "/img/profile.png",
        });
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await api.put(`/users/${user.id}`, formData);
      localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
      alert("Profil berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Memuat data...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-6 space-y-8">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#181a1c] p-6 rounded-md col-span-2">
          <h2 className="text-xl font-semibold mb-4">Profil Saya</h2>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src={formData.avatar}
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full border border-gray-600"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm">Nama Pengguna</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Masukkan nama pengguna"
                className="w-full bg-[#E7E3FC3B] border border-gray-600 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                className="w-full bg-[#E7E3FC3B] border border-gray-600 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm">Kata Sandi</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan kata sandi"
                className="w-full bg-[#E7E3FC3B] border border-gray-600 px-4 py-2 rounded"
              />
            </div>

            <button
              onClick={handleSave}
              className="mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
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
