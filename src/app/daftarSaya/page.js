"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import myList from "@/components/data/myList";

const daftarSaya = () => {
  return (
    <section>
      <Header />
      <div className=" min-h-screen text-white p-6">
        <h1 className="text-2xl font-semibold mb-4">Daftar Saya</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {myList.map((item, index) => (
            <div key={index} className="relative group rounded overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={450}
                className="w-full h-auto object-cover transform transition duration-300 ease-in-out hover:scale-90 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default daftarSaya;
