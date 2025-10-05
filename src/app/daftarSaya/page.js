"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromMyList } from "@/store/myListSlice";

const DaftarSaya = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.myList.items);

  const handleDeleteItem = (id) => {
    dispatch(removeFromMyList(id));
  };

  return (
    <section>
      <Header />
      <div className="min-h-screen text-white p-6">
        <h1 className="text-2xl font-semibold mb-4">Daftar Saya</h1>

        {!list?.length ? (
          <p className="text-gray-400">
            Belum ada item. Tambahkan dari Carousel.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {list.map((item) => (
              <div
                key={item.id ?? item.src}
                className="relative group rounded overflow-hidden"
              >
                <Image
                  src={item.img ?? item.src}
                  alt={item.title ?? "Poster"}
                  width={300}
                  height={450}
                  className="w-full h-auto object-cover transform transition duration-300 ease-in-out hover:scale-90 rounded-lg"
                />
                <button
                  onClick={() => handleDeleteItem(item.id ?? item.src)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
                  title="Hapus dari daftar"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default DaftarSaya;
